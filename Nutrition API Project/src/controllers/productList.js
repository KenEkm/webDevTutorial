"use strict"

const{info} = require("../api/product")
const {on} = require("../utils/dom")
const addProductTemplate = require("../templates/ProductList/addProduct.ejs")

/**
 * 
 * @param {HTMLTableElement} listElement 
 */
function productList(listElement) {
    this.products = []
    this.listElement = listElement

}

productList.prototype.init = function(){
    on(".product-search__remove-product", "click", (event) => {
        const fdcId = parseInt(event.handleObj.getAttribute("data-fdc"), 10)
        this.removeProduct(fdcId)
    })
}

productList.prototype.removeProduct = function(fdcId){
    for(const i in this.products){
        const product = this.products[i]
        if(product['fdcId'] === fdcId){
            this.products.splice(i, 1)
            const trElement = document.querySelector(".product-search__product-row[data-fdc='" + fdcId + "']")
            if(trElement) trElement.remove()
            break
        }
    }
    console.log("this.products: " + this.products)
}

productList.prototype.addProduct = function(fdcId){
    info(fdcId)
        .then((product) => {
            this.products.push(product)
            const productHtml = addProductTemplate({
                title: product['description'],
                fdcId: product['fdcId']
            })
            
            //this.listElement.innerHTML = productHtml |diese Schreibweise lädt alle
            //tr elemente neu und ist daher langsam. Nachfolgender Code lädt nur das Neue.
            this.listElement.insertAdjacentHTML("beforeend", productHtml)
        })
}

module.exports = productList