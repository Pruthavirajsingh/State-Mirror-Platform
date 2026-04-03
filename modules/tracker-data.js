(function () {
  const dataUrl = 'data/tracker-data.json';
  const load = fetch(dataUrl, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load tracker data: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      window.TRACKER_DATA = data;
      window.TRACKER_ALIASES = data.searchAliases || window.TRACKER_ALIASES;
      if (typeof window.applyTrackerDataOverlay === 'function') {
        window.applyTrackerDataOverlay(data);
      }
      return data;
    })
    .catch((error) => {
      console.warn('Tracker data overlay unavailable, continuing with bundled data.', error);
      return null;
    });

  window.TRACKER_DATA_PROMISE = load;
})();
