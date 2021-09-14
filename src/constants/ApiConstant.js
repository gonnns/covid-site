const API = {
  SUMMARY: () => `https://api.covid19api.com/summary`,
  DAYS: (opts) => `https://api.covid19api.com/total/dayone/country/${opts.country}`,
};

export default API;
