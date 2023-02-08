"use strict"

require("../scss/index.scss")

const ProductSearch = require("./controllers/productSearch")
const ProductList = require("./controllers/productList")

const productSearch = new ProductSearch(
    document.getElementById("productSearchInput"),
    document.getElementById("productSearchButton"),
    document.getElementById("productSearchResults")
)
productSearch.init()

const productList = new ProductList(
    document.getElementById("productList")
)
productList.init()

productList.addProduct(2012128)

productSearch.events.on("productSelected", (fdcId) => {
    productList.addProduct(fdcId)
})

productList.events.on("nutrientChange", (nutrients) => {
    console.log(nutrients)
})