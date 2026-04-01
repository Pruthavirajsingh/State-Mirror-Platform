const rows = [
  {
    category: "Party-Owned Entity",
    name: "Indian National Congress",
    associated: "Indian National Congress",
    relation: "Registered Political Party",
    details: "National political party founded in 1885; based in New Delhi [citation:6]",
  },
  {
    category: "Party-Owned Entity",
    name: "Young Indian Pvt Ltd",
    associated: "Young Indian Pvt Ltd",
    relation: "Section 25 Not-for-Profit Company",
    details:
      "Company floated by Sonia Gandhi and Rahul Gandhi; holds 76% shares combined [citation:1]",
  },
  {
    category: "Party-Owned Entity",
    name: "Associated Journals Limited",
    associated: "Associated Journals Limited",
    relation: "Public Limited Company",
    details:
      "Founded by Jawaharlal Nehru in 1938 to publish National Herald; later linked to Young Indian [citation:1]",
  },
  {
    category: "Party-Owned Entity",
    name: "National Herald",
    associated: "Associated Journals Limited",
    relation: "Newspaper Publication",
    details: "Congress-affiliated newspaper; revival plans under Young Indian [citation:1]",
  },
  {
    category: "Leader",
    name: "Rahul Gandhi",
    associated: "Rahul Gandhi",
    relation: "Congress Leader",
    details: "Former party president; son of Rajiv and Sonia Gandhi [citation:7][citation:10]",
  },
  {
    category: "Leader",
    name: "Rahul Gandhi",
    associated: "Young Indian Pvt Ltd",
    relation: "Director & Shareholder",
    details: "Director of Young Indian; holds shares [citation:7]",
  },
  {
    category: "Leader",
    name: "Rahul Gandhi",
    associated: "Rajiv Gandhi Foundation",
    relation: "Trustee",
    details: "Charitable trust [citation:10]",
  },
  {
    category: "Leader",
    name: "Rahul Gandhi",
    associated: "Rajiv Gandhi Charitable Trust",
    relation: "Trustee",
    details: "Charitable trust [citation:10]",
  },
  {
    category: "Leader",
    name: "Rahul Gandhi",
    associated: "Stock Portfolio - Pidilite Industries Ltd",
    relation: "Listed Equity Investment",
    details: "Approx Rs.44.4 lakh investment [citation:10]",
  },
  {
    category: "Leader",
    name: "Rahul Gandhi",
    associated: "Mutual Funds",
    relation: "Investment Portfolio",
    details: "Total value Rs.3.8 crore [citation:2][citation:7]",
  },
  {
    category: "Leader",
    name: "Rahul Gandhi",
    associated: "Commercial Property - Gurugram",
    relation: "Real Estate Asset",
    details: "Commercial property owned [citation:7]",
  },
  {
    category: "Leader",
    name: "Sonia Gandhi",
    associated: "Sonia Gandhi",
    relation: "Former Party President",
    details: "Congress president until 2022; Rajya Sabha MP [citation:1][citation:8]",
  },
  {
    category: "Leader",
    name: "Sonia Gandhi",
    associated: "Young Indian Pvt Ltd",
    relation: "Director & Shareholder",
    details: "Director of Young Indian; holds 38% shares [citation:1]",
  },
  {
    category: "Leader",
    name: "Mallikarjun Kharge",
    associated: "Mallikarjun Kharge",
    relation: "Congress President",
    details: "Current Congress President; director at Young Indian [citation:7]",
  },
  {
    category: "Leader",
    name: "Mallikarjun Kharge",
    associated: "Young Indian Pvt Ltd",
    relation: "Director",
    details: "Director of Young Indian [citation:7]",
  },
  {
    category: "Leader",
    name: "Priyanka Gandhi Vadra",
    associated: "Priyanka Gandhi Vadra",
    relation: "Congress General Secretary",
    details: "Congress leader; co-owns agricultural properties with Rahul Gandhi [citation:7]",
  },
  {
    category: "Leader",
    name: "Priyanka Gandhi Vadra",
    associated: "Agricultural Properties (co-owned with Rahul Gandhi)",
    relation: "Real Estate Asset",
    details: "Three agricultural properties including farmhouse [citation:7]",
  },
  {
    category: "Leader",
    name: "Motilal Vora",
    associated: "Motilal Vora",
    relation: "Senior Congress Leader",
    details: "Former Congress treasurer; chairman and MD of Associated Journals Limited [citation:1]",
  },
  {
    category: "Leader",
    name: "Motilal Vora",
    associated: "Associated Journals Limited",
    relation: "Chairman & Managing Director",
    details: "Chairman and Managing Director of the company owning National Herald [citation:1]",
  },
  {
    category: "Leader",
    name: "Oscar Fernandes",
    associated: "Oscar Fernandes",
    relation: "Senior Congress Leader",
    details: "Former Union Minister [citation:1]",
  },
  {
    category: "Leader",
    name: "Oscar Fernandes",
    associated: "Young Indian Pvt Ltd",
    relation: "Shareholder",
    details: "Held shares in Young Indian [citation:1]",
  },
  {
    category: "Leader",
    name: "Suman Dubey",
    associated: "Suman Dubey",
    relation: "Journalist/Technocrat",
    details: "Former journalist; managing committee member at Young Indian [citation:1]",
  },
  {
    category: "Leader",
    name: "Suman Dubey",
    associated: "Young Indian Pvt Ltd",
    relation: "Managing Committee Member",
    details: "Authorised signatory and director at Young Indian [citation:1]",
  },
  {
    category: "Leader",
    name: "Sam Pitroda",
    associated: "Sam Pitroda",
    relation: "Technocrat",
    details: "Former advisor to Prime Minister; technology expert [citation:1]",
  },
  {
    category: "Leader",
    name: "Sam Pitroda",
    associated: "Young Indian Pvt Ltd",
    relation: "Director",
    details: "Director at Young Indian [citation:1]",
  },
  {
    category: "Leader",
    name: "Abhishek Manu Singhvi",
    associated: "Abhishek Manu Singhvi",
    relation: "Rajya Sabha MP - Telangana",
    details: "Senior advocate; Congress spokesperson [citation:3]",
  },
  {
    category: "Leader",
    name: "Abhishek Manu Singhvi",
    associated: "Stock Portfolio - Listed Shares",
    relation: "Listed Equity Investment",
    details: "Declared listed shares worth approx Rs.190.82 crore [citation:3]",
  },
  {
    category: "Leader",
    name: "T. Subbarami Reddy",
    associated: "T. Subbarami Reddy",
    relation: "Former Congress MP",
    details: "Former Congress MP; promoter of Gayatri Projects [citation:4]",
  },
  {
    category: "Leader",
    name: "T. Subbarami Reddy",
    associated: "Gayatri Projects Ltd",
    relation: "Promoter & Former CWC Invitee",
    details: "Company received NCLT-approved bailout; large road and water contracts [citation:4]",
  },
  {
    category: "Leader",
    name: "A. Revanth Reddy",
    associated: "A. Revanth Reddy",
    relation: "Telangana CM",
    details: "Telangana Chief Minister; Congress leader [citation:9]",
  },
  {
    category: "Leader",
    name: "A. Revanth Reddy",
    associated: "KLSR Infratech",
    relation: "Government Contractor (Alleged Link)",
    details: "Company facing insolvency; awarded several contracts under Congress government [citation:9]",
  },
  {
    category: "Party-Affiliated Entity",
    name: "Sandur Power Company Ltd (SPCL)",
    associated: "Sandur Power Company Ltd",
    relation: "Power Company",
    details: "Acquired by Y.S. Jagan Mohan Reddy in 2001 [citation:5]",
  },
  {
    category: "Party-Affiliated Individual",
    name: "Y.S. Jagan Mohan Reddy",
    associated: "Y.S. Jagan Mohan Reddy",
    relation: "Former Congress Leader",
    details: "Former Congress MP; later founded YSRCP; served as Andhra Pradesh CM [citation:5]",
  },
  {
    category: "Party-Affiliated Individual",
    name: "Y.S. Jagan Mohan Reddy",
    associated: "Sandur Power Company Ltd",
    relation: "Business Owner",
    details: "Acquired defunct power project and later sold shares [citation:5]",
  },
];

const svg = document.querySelector("#graph");
const searchInput = document.querySelector("#search-input");
const quickSearches = document.querySelector("#quick-searches");
const graphEmpty = document.querySelector("#graph-empty");
const sidebarBody = document.querySelector("#sidebar-body");
const sidebarStatus = document.querySelector("#sidebar-status");
const loadingBar = document.querySelector("#loading");
const tooltip = document.querySelector("#tooltip");

const width = 1600;
const height = 1000;
const centers = {
  core: { x: 380, y: 300 },
  leader: { x: 750, y: 320 },
  company: { x: 1110, y: 330 },
  asset: { x: 1030, y: 690 },
  other: { x: 570, y: 720 },
};
const palette = {
  core: "var(--accent)",
  leader: "var(--blue)",
  company: "var(--amber)",
  asset: "var(--accent2)",
  other: "var(--purple)",
};
const quickTargets = [
  "Indian National Congress",
  "Young Indian Pvt Ltd",
  "Rahul Gandhi",
  "Sonia Gandhi",
  "Mallikarjun Kharge",
  "Priyanka Gandhi Vadra",
  "Abhishek Manu Singhvi",
  "T. Subbarami Reddy",
  "Sandur Power Company Ltd",
];

const nodes = new Map();
const links = [];
const nodeEls = new Map();
const linkEls = new Map();
const state = {
  selectedId: null,
  search: "",
  zoom: 0.95,
  labelsVisible: true,
  draggingId: null,
  hoverId: null,
  tx: 0,
  ty: 0,
};

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function nodeGroup(node) {
  const text = `${node.category} ${node.relation} ${node.details}`.toLowerCase();
  if (text.includes("asset") || text.includes("portfolio") || text.includes("property") || text.includes("shares") || text.includes("income")) return "asset";
  if (text.includes("company") || text.includes("trust") || text.includes("foundation") || text.includes("projects") || text.includes("journals")) return node.category.toLowerCase().includes("party-owned") ? "core" : "company";
  if (text.includes("party-owned")) return "core";
  if (text.includes("leader")) return "leader";
  if (text.includes("party-affiliated individual")) return "leader";
  return "other";
}

function nodeRadius(node) {
  const base = { core: 44, leader: 36, company: 30, asset: 24, other: 22 }[node.group] || 24;
  return Math.min(64, base + Math.min(16, node.degree * 2));
}

function nodeLabel(node) {
  const parts = node.name.split(/\s+/);
  return parts.length === 1 ? parts[0].slice(0, 2).toUpperCase() : parts.slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function ensureNode(name, seed = {}) {
  const id = slugify(name);
  let node = nodes.get(id);
  if (!node) {
    node = {
      id,
      name,
      category: seed.category || "",
      relation: seed.relation || "",
      details: seed.details || "",
      x: width * (0.22 + Math.random() * 0.56),
      y: height * (0.2 + Math.random() * 0.52),
      vx: 0,
      vy: 0,
      fx: null,
      fy: null,
      degree: 0,
      incoming: [],
      outgoing: [],
      group: seed.group || "other",
    };
    nodes.set(id, node);
  }
  if (seed.category && !node.category) node.category = seed.category;
  if (seed.relation && !node.relation) node.relation = seed.relation;
  if (seed.details && !node.details) node.details = seed.details;
  return node;
}

for (const row of rows) {
  const source = ensureNode(row.name, { category: row.category, relation: row.relation, details: row.details });
  const target = ensureNode(row.associated, { category: row.category, relation: row.relation, details: row.details });
  source.group = nodeGroup(source);
  target.group = nodeGroup(target);
  if (source.id !== target.id) {
    const link = {
      id: `${source.id}-${target.id}-${links.length}`,
      source: source.id,
      target: target.id,
      relation: row.relation,
      details: row.details,
      weight: row.details.includes("%") ? 2 : 1,
    };
    links.push(link);
    source.outgoing.push(link);
    target.incoming.push(link);
  }
}

for (const node of nodes.values()) {
  node.group = nodeGroup(node);
  node.degree = node.incoming.length + node.outgoing.length;
}

const root = nodes.get(slugify("Indian National Congress"));
if (root) {
  root.fx = 380;
  root.fy = 305;
}
const focusNode = [...nodes.values()].sort((a, b) => b.degree - a.degree)[0] || root || [...nodes.values()][0];
state.selectedId = focusNode?.id || root?.id || "";

loadingBar.style.width = "100%";
setTimeout(() => {
  loadingBar.style.opacity = "0";
}, 220);

function populateQuickSearches() {
  quickSearches.innerHTML = "";
  for (const name of quickTargets) {
    const chip = document.createElement("div");
    chip.className = "quick-chip";
    chip.textContent = name;
    chip.addEventListener("click", () => loadEntity(name));
    quickSearches.appendChild(chip);
  }
}

const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
defs.innerHTML = `
  <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
    <feDropShadow dx="0" dy="10" stdDeviation="8" flood-color="#151515" flood-opacity="0.22"></feDropShadow>
  </filter>
  <marker id="arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto" markerUnits="strokeWidth">
    <path d="M0,0 L12,6 L0,12 z" fill="rgba(200,245,66,0.35)"></path>
  </marker>
  <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#dbeafe"></stop><stop offset="100%" stop-color="#1d4ed8"></stop></linearGradient>
  <linearGradient id="leaderGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#d1fae5"></stop><stop offset="100%" stop-color="#0f766e"></stop></linearGradient>
  <linearGradient id="companyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#fef3c7"></stop><stop offset="100%" stop-color="#a16207"></stop></linearGradient>
  <linearGradient id="assetGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#dbeafe"></stop><stop offset="100%" stop-color="#42f5c8"></stop></linearGradient>
  <linearGradient id="otherGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e5e7eb"></stop><stop offset="100%" stop-color="#6b7280"></stop></linearGradient>
`;
svg.appendChild(defs);

const graphLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
const linkLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
const nodeLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
graphLayer.appendChild(linkLayer);
graphLayer.appendChild(nodeLayer);
svg.appendChild(graphLayer);

for (const link of links) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("class", "link");
  path.setAttribute("marker-end", "url(#arrow)");
  linkLayer.appendChild(path);
  linkEls.set(link.id, path);
}

for (const node of nodes.values()) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("class", "node");
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("r", String(nodeRadius(node)));
  circle.setAttribute("fill", `url(#${node.group}Gradient)`);
  const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  label.setAttribute("text-anchor", "middle");
  label.setAttribute("dominant-baseline", "middle");
  label.textContent = nodeLabel(node);
  group.appendChild(circle);
  group.appendChild(label);
  nodeLayer.appendChild(group);
  nodeEls.set(node.id, group);

  group.addEventListener("pointerenter", (event) => {
    state.hoverId = node.id;
    tooltip.innerHTML = `<strong>${node.name}</strong><span>${node.relation}</span>`;
    tooltip.dataset.show = "true";
    tooltip.style.left = `${event.clientX}px`;
    tooltip.style.top = `${event.clientY}px`;
    render();
  });
  group.addEventListener("pointermove", (event) => {
    if (state.hoverId === node.id) {
      tooltip.style.left = `${event.clientX}px`;
      tooltip.style.top = `${event.clientY}px`;
    }
    if (state.draggingId === node.id) {
      const rect = svg.getBoundingClientRect();
      node.fx = ((event.clientX - rect.left) / rect.width) * width;
      node.fy = ((event.clientY - rect.top) / rect.height) * height;
    }
  });
  group.addEventListener("pointerleave", () => {
    state.hoverId = null;
    tooltip.dataset.show = "false";
    render();
  });
  group.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    state.selectedId = node.id;
    state.draggingId = node.id;
    node.fx = node.x;
    node.fy = node.y;
    group.setPointerCapture(event.pointerId);
    render();
  });
  group.addEventListener("pointerup", (event) => {
    if (state.draggingId === node.id) {
      state.draggingId = null;
      node.fx = null;
      node.fy = null;
      group.releasePointerCapture(event.pointerId);
    }
  });
}

function neighborSet(selectedId) {
  const set = new Set([selectedId]);
  const node = nodes.get(selectedId);
  if (!node) return set;
  for (const link of [...node.incoming, ...node.outgoing]) {
    set.add(link.source);
    set.add(link.target);
  }
  return set;
}

function renderSidebar(node) {
  const related = [...node.incoming, ...node.outgoing]
    .map((link) => {
      const otherId = link.source === node.id ? link.target : link.source;
      return { link, other: nodes.get(otherId) };
    })
    .filter((item) => item.other)
    .sort((a, b) => (b.other.degree || 0) - (a.other.degree || 0))
    .slice(0, 7);

  sidebarStatus.textContent = state.search ? "SEARCH" : "ACTIVE";
  sidebarBody.innerHTML = `
    <div class="entity-header">
      <span class="entity-type-badge" style="background:${palette[node.group] || "var(--accent)"};">${node.category || "Entity"}</span>
      <div class="entity-name">${node.name}</div>
      <div class="entity-desc">${node.details || "No detail supplied."}</div>
    </div>
    <div class="stats-row">
      <div class="stat-cell"><span class="stat-num">${node.degree}</span><span class="stat-label">Connections</span></div>
      <div class="stat-cell"><span class="stat-num">${node.incoming.length}</span><span class="stat-label">Incoming</span></div>
      <div class="stat-cell"><span class="stat-num">${node.outgoing.length}</span><span class="stat-label">Outgoing</span></div>
    </div>
    <div class="sidebar-section">
      <div class="section-head"><span>Key links</span><span>${related.length}</span></div>
      <div class="section-content" id="relation-slot"></div>
    </div>
    <div class="sidebar-section">
      <div class="section-head"><span>Network context</span><span>${node.group}</span></div>
      <div class="section-content">
        <div class="alert-box" style="border-left-color: var(--accent2);"><p><strong>Category:</strong> ${node.category || "Unclassified"}<br><strong>Relation:</strong> ${node.relation || "None"}</p></div>
        <div class="alert-box" style="border-left-color: var(--amber);"><p><strong>Source:</strong> ${node.details || "No source notes supplied."}</p></div>
      </div>
    </div>
  `;

  const slot = sidebarBody.querySelector("#relation-slot");
  if (!related.length) {
    slot.innerHTML = `<div class="sidebar-empty" style="padding:12px 0 0;text-align:left;"><p>NO DIRECT RELATIONSHIPS FOUND</p></div>`;
    return;
  }
  slot.innerHTML = related
    .map(({ link, other }) => {
      const outward = link.source === node.id;
      const dot = outward ? "var(--accent)" : "var(--blue)";
      return `
        <div class="node-card" data-linked="${other.id}">
          <div class="node-dot" style="background:${dot};"></div>
          <div class="node-card-text">
            <div class="node-card-name">${outward ? "To" : "From"} ${other.name}</div>
            <div class="node-card-sub">${link.relation} · ${link.details}</div>
          </div>
          <div class="node-card-arrow">→</div>
        </div>
      `;
    })
    .join("");
  slot.querySelectorAll(".node-card").forEach((card) => {
    card.addEventListener("click", () => {
      const target = nodes.get(card.getAttribute("data-linked"));
      if (target) loadEntity(target.name);
    });
  });
}

function updatePhysics() {
  const nodesArray = [...nodes.values()];
  for (const node of nodesArray) {
    const center = centers[node.group] || centers.other;
    const targetX = node.fx ?? center.x;
    const targetY = node.fy ?? center.y;
    node.vx += (targetX - node.x) * 0.00065;
    node.vy += (targetY - node.y) * 0.00065;
  }

  for (let i = 0; i < nodesArray.length; i += 1) {
    for (let j = i + 1; j < nodesArray.length; j += 1) {
      const a = nodesArray[i];
      const b = nodesArray[j];
      let dx = b.x - a.x;
      let dy = b.y - a.y;
      let dist2 = dx * dx + dy * dy;
      if (dist2 < 0.01) dist2 = 0.01;
      const dist = Math.sqrt(dist2);
      const minDist = nodeRadius(a) + nodeRadius(b) + 16;
      const overlap = Math.max(0, minDist - dist);
      const force = (1000 / dist2) + overlap * 0.2;
      const fx = (dx / dist) * force * 0.01;
      const fy = (dy / dist) * force * 0.01;
      a.vx -= fx;
      a.vy -= fy;
      b.vx += fx;
      b.vy += fy;
    }
  }

  for (const link of links) {
    const source = nodes.get(link.source);
    const target = nodes.get(link.target);
    if (!source || !target) continue;
    const dx = target.x - source.x;
    const dy = target.y - source.y;
    const dist = Math.hypot(dx, dy) || 1;
    const desired = 120 + Math.min(100, Math.log((source.degree + target.degree + 2) * 10) * 24);
    const diff = dist - desired;
    const factor = (diff / dist) * 0.02 * (link.weight || 1);
    source.vx += dx * factor;
    source.vy += dy * factor;
    target.vx -= dx * factor;
    target.vy -= dy * factor;
  }

  for (const node of nodesArray) {
    node.vx *= 0.84;
    node.vy *= 0.84;
    node.x += node.vx * 0.08;
    node.y += node.vy * 0.08;
    node.x = Math.max(90, Math.min(width - 90, node.x));
    node.y = Math.max(90, Math.min(height - 90, node.y));
  }
}

function edgePath(source, target) {
  const dx = target.x - source.x;
  const dy = target.y - source.y;
  const distance = Math.hypot(dx, dy) || 1;
  const nx = dx / distance;
  const ny = dy / distance;
  const sx = source.x + nx * (nodeRadius(source) + 6);
  const sy = source.y + ny * (nodeRadius(source) + 6);
  const tx = target.x - nx * (nodeRadius(target) + 8);
  const ty = target.y - ny * (nodeRadius(target) + 8);
  const curve = Math.min(90, distance * 0.18);
  const mx = (sx + tx) / 2 - ny * curve;
  const my = (sy + ty) / 2 + nx * curve;
  return `M ${sx.toFixed(2)} ${sy.toFixed(2)} Q ${mx.toFixed(2)} ${my.toFixed(2)} ${tx.toFixed(2)} ${ty.toFixed(2)}`;
}

function render() {
  const selected = nodes.get(state.selectedId) || focusNode;
  if (!selected) return;

  graphEmpty.classList.add("hidden");
  graphLayer.setAttribute("transform", `translate(${width / 2} ${height / 2}) scale(${state.zoom}) translate(${-width / 2 + state.tx} ${-height / 2 + state.ty})`);
  renderSidebar(selected);
  const active = neighborSet(selected.id);
  const searchActive = state.search.length > 0;

  for (const link of links) {
    const source = nodes.get(link.source);
    const target = nodes.get(link.target);
    const path = linkEls.get(link.id);
    if (!source || !target || !path) continue;
    const visible = active.has(source.id) && active.has(target.id) && (matchesSearch(source) || matchesSearch(target) || !searchActive);
    path.setAttribute("d", edgePath(source, target));
    path.classList.toggle("strong", active.has(source.id) && active.has(target.id));
    path.classList.toggle("dimmed", searchActive ? !visible : false);
  }

  for (const node of nodes.values()) {
    const group = nodeEls.get(node.id);
    if (!group) continue;
    const visible = active.has(node.id) || matchesSearch(node) || !searchActive;
    group.setAttribute("transform", `translate(${node.x.toFixed(2)}, ${node.y.toFixed(2)})`);
    group.classList.toggle("selected", node.id === selected.id);
    group.classList.toggle("focused", active.has(node.id));
    group.classList.toggle("dimmed", searchActive ? !visible : false);
    group.style.display = visible ? "" : "none";
    const circle = group.querySelector("circle");
    const label = group.querySelector("text");
    circle.setAttribute("r", String(nodeRadius(node)));
    circle.setAttribute("fill", `url(#${node.group}Gradient)`);
    label.textContent = nodeLabel(node);
    label.style.display = state.labelsVisible ? "" : "none";
  }
}

function animate() {
  updatePhysics();
  render();
  requestAnimationFrame(animate);
}

function matchesSearch(node) {
  if (!state.search) return true;
  const text = `${node.name} ${node.category} ${node.relation} ${node.details}`.toLowerCase();
  return text.includes(state.search);
}

function loadEntity(name) {
  const match = [...nodes.values()].find((node) => node.name.toLowerCase() === name.toLowerCase() || node.id === slugify(name));
  if (!match) return;
  state.selectedId = match.id;
  state.search = "";
  searchInput.value = match.name;
  render();
}

function runSearch() {
  const query = searchInput.value.trim().toLowerCase();
  state.search = query;
  if (!query) {
    render();
    return;
  }
  const match = [...nodes.values()].find((node) => `${node.name} ${node.category} ${node.relation} ${node.details}`.toLowerCase().includes(query));
  if (match) state.selectedId = match.id;
  render();
}

function zoomIn() {
  state.zoom = Math.min(1.8, state.zoom * 1.15);
  render();
}

function zoomOut() {
  state.zoom = Math.max(0.55, state.zoom / 1.15);
  render();
}

function resetZoom() {
  state.zoom = 0.95;
  state.tx = 0;
  state.ty = 0;
  render();
}

function toggleLabels() {
  state.labelsVisible = !state.labelsVisible;
  render();
}

populateQuickSearches();
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") runSearch();
});
searchInput.addEventListener("input", () => {
  state.search = searchInput.value.trim().toLowerCase();
});

window.runSearch = runSearch;
window.loadEntity = loadEntity;
window.zoomIn = zoomIn;
window.zoomOut = zoomOut;
window.resetZoom = resetZoom;
window.toggleLabels = toggleLabels;

render();
animate();
