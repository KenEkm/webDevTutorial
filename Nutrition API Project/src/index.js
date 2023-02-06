"use strict"

require("../scss/index.scss")

const ProductSearch = require("./controllers/productSearch")

const productSearch = new ProductSearch(
    document.getElementById("productSearchInput"),
    document.getElementById("productSearchButton")
)

productSearch.init()