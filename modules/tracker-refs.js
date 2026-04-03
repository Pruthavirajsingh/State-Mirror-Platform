(function () {
  const normalizeRefQuery = (value) => String(value || '').replace(/\s+/g, ' ').trim();
  const wikipediaSearchUrl = (query) => `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(normalizeRefQuery(query))}`;
  const newsSearchUrl = (query) => `https://news.google.com/search?q=${encodeURIComponent(normalizeRefQuery(query))}`;
  const isCaseLike = (node = {}) => {
    const haystack = normalizeRefQuery(`${node.label || ''} ${node.desc || ''} ${node.type || ''}`).toLowerCase();
    return /case|controvers|probe|bail|raid|summons|scam|fir|criminal|assets|allegation|arrest|charges|court|legal|money laundering|disproportionate|ed |acb|cbi/.test(haystack);
  };
  const referenceForNode = (node, entity) => {
    const label = normalizeRefQuery(node.label || node.name || entity?.name || '');
    const context = normalizeRefQuery(`${label} ${entity?.name || ''} ${node.desc || ''}`);
    if (node.type === 'person') {
      return { href: wikipediaSearchUrl(label), label: 'Wikipedia profile', kind: 'wiki' };
    }
    if (isCaseLike(node) || ['flag', 'govt', 'govtlink', 'investigating'].includes(node.type)) {
      return { href: newsSearchUrl(context), label: 'News coverage', kind: 'news' };
    }
    return { href: wikipediaSearchUrl(context || label), label: 'Web reference', kind: 'wiki' };
  };
  const referenceForEntity = (entity) => {
    const label = normalizeRefQuery(entity?.name || entity?.id || '');
    const context = normalizeRefQuery(`${label} ${entity?.desc || ''}`);
    if (/person/i.test(entity?.type)) {
      return { href: wikipediaSearchUrl(label), label: 'Wikipedia profile', kind: 'wiki' };
    }
    if (isCaseLike(entity) || entity?.type === 'flag') {
      return { href: newsSearchUrl(context), label: 'News coverage', kind: 'news' };
    }
    return { href: wikipediaSearchUrl(context || label), label: 'Web reference', kind: 'wiki' };
  };

  window.TrackerRefs = {
    normalizeRefQuery,
    wikipediaSearchUrl,
    newsSearchUrl,
    isCaseLike,
    referenceForNode,
    referenceForEntity,
  };
})();
