"use strict"

const axios = require("axios")

const auth = {
  username: "zLXDRhUpG9vmq2gToKhTQOTq2kFdV44khbgwayXo"
}

module.exports.search = function search(term) {
  return axios
    .post("https://api.nal.usda.gov/fdc/v1/search", {
      generalSearchInput: term
    }, {auth})
    .then((response) => response.data['foods'])
}

module.exports.info = function info(fdcId) {
  return axios
    .get("https://api.nal.usda.gov/fdc/v1/" + fdcId, {auth})
    .then((response) => response.data)
}

