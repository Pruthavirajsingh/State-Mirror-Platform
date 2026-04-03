const SOURCE_URL = 'https://sansad.in/api_ls/member?loksabha=17&size=6000&page=1';

function clean(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim();
}

function normalize(value) {
  return clean(value).toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function fullName(member) {
  return clean([member.initial, member.firstName, member.lastName].filter(Boolean).join(' '));
}

function toArray(value) {
  return Array.isArray(value) ? value.map(clean).filter(Boolean) : [];
}

function buildMember(member) {
  const name = fullName(member);
  const party = clean(member.partySname || member.partyFname || 'Independent');
  const state = clean(member.stateName);
  const constituency = clean(member.constName);
  const profession = clean(member.profession || member.profession2);
  const status = clean(member.status);
  const terms = Number(member.noOfTerms) || 0;
  const age = Number(member.age) || null;

  return {
    id: `sansad_${member.mpsno}`,
    sourceId: String(member.mpsno),
    name,
    initial: clean(member.initial),
    gender: clean(member.gender),
    party,
    partyFull: clean(member.partyFname),
    state,
    constituency,
    profession,
    qualification: clean(member.qualification),
    status,
    terms,
    experience: clean(member.lsExpr),
    age,
    dob: clean(member.dob),
    emails: toArray(member.email),
    phones: toArray(member.phone),
    imageUrl: clean(member.imageUrl),
    profileUrl: member.profileUrl ? clean(member.profileUrl) : null,
    presentAddress: clean([member.presentFaddr, member.presentLaddr].filter(Boolean).join(' ')),
    permanentAddress: clean([member.permanentFaddr, member.permanentLaddr].filter(Boolean).join(' ')),
    maritalStatus: clean(member.maritalStatus),
    numberOfSons: Number(member.numberOfSons) || 0,
    numberOfDaughters: Number(member.numberOfDaughters) || 0,
    categoryCode: clean(member.categoryCode),
    updatedAt: clean(member.updatedAt),
    statusKey: normalize(status),
    partyKey: normalize(party),
    stateKey: normalize(state),
    constituencyKey: normalize(constituency),
  };
}

function buildGraph(members) {
  const nodes = [];
  const links = [];
  const seen = new Set();

  const ensureNode = (id, label, type, desc, extra = {}) => {
    if (seen.has(id)) return;
    seen.add(id);
    nodes.push({ id, label, type, desc, ...extra });
  };

  members.forEach((member) => {
    const memberId = member.id;
    const partyId = `party_${member.partyKey || 'independent'}`;
    const stateId = `state_${member.stateKey || 'unknown'}`;
    const constituencyId = `const_${member.constituencyKey || 'unknown'}`;
    const statusId = `status_${member.statusKey || 'unknown'}`;

    ensureNode(
      memberId,
      member.name,
      'person',
      `${member.party} MP from ${member.constituency}, ${member.state}.`
    );
    ensureNode(
      partyId,
      member.party,
      'root',
      `Party affiliation for ${member.name}.`
    );
    ensureNode(
      stateId,
      member.state || 'Unknown State',
      'global',
      `State represented by ${member.name}.`
    );
    ensureNode(
      constituencyId,
      member.constituency || 'Unknown Constituency',
      'global',
      `Constituency represented by ${member.name}.`
    );
    ensureNode(
      statusId,
      member.status || 'Unknown Status',
      'flag',
      `Membership status: ${member.status || 'Unknown'}.`
    );

    links.push(
      { source: memberId, target: partyId, type: 'party' },
      { source: memberId, target: stateId, type: 'constituency' },
      { source: memberId, target: constituencyId, type: 'constituency' },
      { source: memberId, target: statusId, type: 'status' }
    );
  });

  return { nodes, links };
}

function buildPartySummary(members) {
  const byParty = new Map();
  members.forEach((member) => {
    const key = member.party || 'Independent';
    const bucket = byParty.get(key) || { party: key, count: 0, states: new Set() };
    bucket.count += 1;
    if (member.state) bucket.states.add(member.state);
    byParty.set(key, bucket);
  });

  return [...byParty.values()]
    .map((entry) => ({
      party: entry.party,
      count: entry.count,
      states: [...entry.states].sort(),
    }))
    .sort((a, b) => b.count - a.count || a.party.localeCompare(b.party));
}

async function handler(req, res) {
  try {
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    const upstream = await fetch(SOURCE_URL, {
      headers: { Accept: 'application/json' },
    });
    if (!upstream.ok) {
      res.statusCode = upstream.status;
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
      res.end(JSON.stringify({
        error: 'Failed to fetch Sansad live members',
        status: upstream.status,
      }));
      return;
    }

    const payload = await upstream.json();
    const members = (payload.membersDtoList || []).map(buildMember);
    const graph = buildGraph(members);

    const body = {
      schemaVersion: 1,
      generatedAt: new Date().toISOString(),
      source: {
        name: 'Sansad Lok Sabha Members',
        membersUrl: 'https://sansad.in/ls/members',
        apiUrl: SOURCE_URL,
      },
      meta: payload.metaDatasDto || null,
      members,
      parties: buildPartySummary(members),
      graph,
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(body));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({
      error: 'Sansad live members proxy failed',
      message: error?.message || String(error),
    }));
  }
}

module.exports = handler;
