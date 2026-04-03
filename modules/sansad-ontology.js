(function () {
  const endpoint = '/api/sansad-members';
  const state = {
    members: [],
    byId: new Map(),
    byName: new Map(),
    byParty: new Map(),
    byConstituency: new Map(),
    byState: new Map(),
  };

  function clean(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function normalize(value) {
    return clean(value).toLowerCase().replace(/[^a-z0-9]+/g, '');
  }

  function fullName(member) {
    return clean(member?.name || [member?.initial, member?.firstName, member?.lastName].filter(Boolean).join(' '));
  }

  function buildLiveMemberEntity(member) {
    const name = fullName(member);
    const party = clean(member.party || member.partyFull || 'Independent');
    const stateName = clean(member.state);
    const constituency = clean(member.constituency);
    const profession = clean(member.profession);
    const status = clean(member.status || 'Unknown');
    const terms = Number(member.terms) || 0;
    const age = Number(member.age) || null;
    const symbolKey = normalize(member.party || member.partyFull || '');

    const nodes = [
      { id: 'member', label: name, type: 'person', size: 28, desc: `${party} MP from ${constituency}, ${stateName}.` },
      { id: 'party', label: party, type: 'root', size: 18, desc: `Party affiliation: ${party}.` },
      { id: 'constituency', label: constituency, type: 'global', size: 16, desc: `Constituency: ${constituency}.` },
      { id: 'state', label: stateName, type: 'global', size: 16, desc: `State: ${stateName}.` },
      { id: 'status', label: status, type: 'flag', size: 12, desc: `Membership status: ${status}.` },
      { id: 'terms', label: `${terms} Terms`, type: 'global', size: 13, desc: `Lok Sabha terms: ${member.experience || 'N/A'}.` },
    ];

    if (profession) {
      nodes.push({ id: 'profession', label: profession, type: 'global', size: 12, desc: `Profession: ${profession}.` });
    }
    if (age) {
      nodes.push({ id: 'age', label: `Age ${age}`, type: 'global', size: 12, desc: `Age: ${age}. Date of birth: ${clean(member.dob) || 'N/A'}.` });
    }
    if (member.profileUrl || member.imageUrl) {
      nodes.push({
        id: 'source',
        label: 'Sansad Profile',
        type: 'flag',
        size: 13,
        desc: `Live profile reference for ${name}.`,
        sourceUrl: member.profileUrl || member.imageUrl,
      });
    }

    const links = [
      { source: 'member', target: 'party', type: 'party' },
      { source: 'member', target: 'constituency', type: 'constituency' },
      { source: 'member', target: 'state', type: 'constituency' },
      { source: 'member', target: 'status', type: 'flag' },
      { source: 'member', target: 'terms', type: 'global' },
    ];

    if (profession) links.push({ source: 'member', target: 'profession', type: 'global' });
    if (age) links.push({ source: 'member', target: 'age', type: 'global' });
    if (member.profileUrl || member.imageUrl) links.push({ source: 'member', target: 'source', type: 'flag' });

    return {
      id: `sansad_${member.sourceId || member.id || symbolKey || name}`,
      name,
      type: 'person',
      desc: `${party} MP from ${constituency}, ${stateName}.`,
      founded: '17th Lok Sabha',
      hq: 'New Delhi',
      subsidiaries: 0,
      govtLinks: 0,
      globalExposure: 0,
      marketCap: 'N/A',
      riskLevel: status.toLowerCase() === 'sitting' ? 'LOW' : 'MEDIUM',
      symbolKey,
      sourceUrl: member.profileUrl || member.imageUrl || null,
      nodes,
      links,
      alerts: [
        { level: 'low', title: 'Live Sansad Source', text: `Synced from Sansad members API for ${status.toLowerCase() || 'current'} Lok Sabha data.` },
      ],
    };
  }

  function indexMembers(members) {
    state.members = members.slice();
    state.byId = new Map();
    state.byName = new Map();
    state.byParty = new Map();
    state.byConstituency = new Map();
    state.byState = new Map();

    const addToMap = (map, key, member) => {
      if (!key) return;
      const normalized = normalize(key);
      if (!normalized) return;
      const bucket = map.get(normalized) || [];
      bucket.push(member);
      map.set(normalized, bucket);
    };

    for (const member of members) {
      const id = normalize(member.id || member.sourceId);
      if (id) state.byId.set(id, member);
      addToMap(state.byName, member.name, member);
      addToMap(state.byParty, member.party || member.partyFull, member);
      addToMap(state.byConstituency, member.constituency, member);
      addToMap(state.byState, member.state, member);
    }
  }

  function syncCurrentLiveEntity() {
    const current = window.CURRENT_ENTITY;
    const currentId = String(current?.id || '');
    if (!currentId.startsWith('sansad_')) return;

    const sourceId = normalize(currentId.replace(/^sansad_/, ''));
    const currentName = clean(current?.name || '');
    const member = state.byId.get(sourceId) || findSansadMember(currentName || sourceId);
    if (!member) return;

    const entity = buildLiveMemberEntity(member);
    if (typeof window.loadEntityObject === 'function') {
      window.loadEntityObject(entity, { animate: false });
    } else {
      window.__PENDING_SANSAD_ENTITY__ = entity;
    }
  }

  function scoreMember(member, query) {
    const haystack = normalize([
      member.name,
      member.party,
      member.partyFull,
      member.constituency,
      member.state,
      member.profession,
      member.qualification,
      member.status,
      member.id,
      member.sourceId,
    ].join(' '));

    const normalizedQuery = normalize(query);
    if (!normalizedQuery) return 0;
    if (haystack === normalizedQuery) return 100;
    let score = 0;
    if (normalize(member.name) === normalizedQuery) score += 80;
    if (normalize(member.party) === normalizedQuery || normalize(member.partyFull) === normalizedQuery) score += 60;
    if (normalize(member.constituency) === normalizedQuery) score += 55;
    if (normalize(member.state) === normalizedQuery) score += 45;
    if (haystack.includes(normalizedQuery)) score += 30;
    if (normalize(member.name).includes(normalizedQuery)) score += 25;
    if (normalize(member.party).includes(normalizedQuery) || normalize(member.partyFull).includes(normalizedQuery)) score += 20;
    return score;
  }

  function findSansadMember(query) {
    const normalizedQuery = normalize(query);
    if (!normalizedQuery || !state.members.length) return null;

    const exactName = state.byName.get(normalizedQuery)?.[0];
    if (exactName) return exactName;
    const exactId = state.byId.get(normalizedQuery);
    if (exactId) return exactId;

    const ranked = state.members
      .map((member) => ({ member, score: scoreMember(member, query) }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);

    return ranked[0]?.member || null;
  }

  function loadSansadMember(member) {
    const entity = buildLiveMemberEntity(member);
    if (typeof window.loadEntityObject === 'function') {
      window.loadEntityObject(entity);
    } else {
      window.__PENDING_SANSAD_ENTITY__ = entity;
    }
    return entity;
  }

  async function refreshSansadOntology() {
    const response = await fetch(endpoint, { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Failed to load Sansad ontology: ${response.status}`);
    }
    const data = await response.json();
    window.SANSAD_ONTOLOGY = data;
    window.SANSAD_ONTOLOGY_META = data.meta || null;
    window.SANSAD_ONTOLOGY_SOURCE = data.source || null;
    indexMembers((data.members || []).map((member) => ({
      ...member,
      sourceId: member.sourceId || member.id?.replace(/^sansad_/, ''),
    })));
    syncCurrentLiveEntity();
    return data;
  }

  const promise = refreshSansadOntology()
    .catch((error) => {
      console.warn('Sansad ontology unavailable; continuing with static tracker data.', error);
      window.SANSAD_ONTOLOGY = null;
      window.SANSAD_ONTOLOGY_META = null;
      window.SANSAD_ONTOLOGY_SOURCE = null;
      indexMembers([]);
      return null;
    });

  let refreshTimer = null;
  function scheduleRefresh() {
    if (refreshTimer) return;
    refreshTimer = window.setInterval(() => {
      refreshSansadOntology().catch((error) => {
        console.warn('Sansad ontology refresh failed.', error);
      });
    }, 10 * 60 * 1000);
  }

  promise.then((data) => {
    if (data) scheduleRefresh();
  }).catch(() => {});

  window.refreshSansadOntology = refreshSansadOntology;

  window.SANSAD_ONTOLOGY_PROMISE = promise;
  window.findSansadMember = findSansadMember;
  window.loadSansadMember = loadSansadMember;
})();
