const config = require("../config/server");

module.exports = apiEndpoint => {
  return `${config.API_URL}/${apiEndpoint}?api_key=${config.API_KEY}`;
};
