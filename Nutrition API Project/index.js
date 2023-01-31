'use strict'


const axios = require("axios")

function search(term) {
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

search("Apple").then(function(x){
    console.log(x)
})

function info(fdcid){
    return axios.get("https://api.nal.usda.gov/fdc/v1/food/" + fdcid, {
        params: {
            api_key: "zLXDRhUpG9vmq2gToKhTQOTq2kFdV44khbgwayXo"
        }
    })
        .then(function (response) {
            return response.data
        })
}


info(167733).then(function(p){
    console.log(p)
})