'use strict'

/*
const productApi = require("./api/product")
const search = productApi.search
const info = productApi.info
*/

//alternative Schreibweise
const {search, info} = require("./api/product")


search("Apple").then(function(x){
    console.log(x)
})

//alternative Schreibweise
info(167733).then((p) => console.log(p))