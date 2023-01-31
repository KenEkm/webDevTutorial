'use strict'

const axios = require("axios")

module.exports.search = function search(term) {
    return axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
        params: {
            api_key: "zLXDRhUpG9vmq2gToKhTQOTq2kFdV44khbgwayXo",
            query: term
        }
    })
        .then(function (response) {
            return response.data['foods']
        })
}

module.exports.info = function info(fdcid){
    return axios.get("https://api.nal.usda.gov/fdc/v1/food/" + fdcid, {
        params: {
            api_key: "zLXDRhUpG9vmq2gToKhTQOTq2kFdV44khbgwayXo"
        }
    })
        //alternative Schreibweise
        .then((response) => response.data)
}