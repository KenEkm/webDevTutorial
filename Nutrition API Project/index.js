'use strict'


const axios = require("axios")

axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
        params: {
            api_key: "zLXDRhUpG9vmq2gToKhTQOTq2kFdV44khbgwayXo",
            query: "Apple"
        }
    })
    .then(function(response){
        for(const food of response.data['foods']){
            console.log(food['fdcId'] + ": " + food['description'])
        }
    })

