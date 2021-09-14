import axios from 'axios';

const API = {
  Countries: async (opts, callback) => {
    const response = await axios.get(`https://api.covid19api.com/countries`);
    callback(response.data);
  },
  Summary: async (opts, callback) => {
    const response = await axios.get(`https://api.covid19api.com/summary`);
    callback(response.data);
  },
  Days: async (opts, callback) => {
    const response = await axios.get(
      `https://api.covid19api.com/total/dayone/country/${opts.country}`
    );
    callback(response.data);
  },
};

export default API;
