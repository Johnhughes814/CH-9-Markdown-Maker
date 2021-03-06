const fs = require("fs");
const axios = require("axios");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;

    return axios.get(queryUrl).then(function (response) {
      return response;
    });
  },
};

module.exports = api;
