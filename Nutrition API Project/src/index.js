"use strict"

require("../scss/index.scss")

const ProductSearch = require("./controllers/productSearch")
const ProductList = require("./controllers/productList")
const ProductNutrients = require('./controllers/productNutrients')

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

const productNutrients = new ProductNutrients(
    document.getElementById("productNutrient--carbs"),
    document.getElementById("productNutrient--protein"),
    document.getElementById("productNutrient--fat")
)
productNutrients.init()

productSearch.events.on("productSelected", (fdcId) => {
    productList.addProduct(fdcId)
})

productList.events.on("nutrientChange", (nutrients) => {
    productNutrients.setNutrients(nutrients)
})