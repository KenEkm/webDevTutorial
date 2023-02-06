"use strict"

const{info} = require("../api/product")
const addProductTemplate = require("../templates/ProductList/addProduct.ejs")

/**
 * 
 * @param {HTMLTableElement} listElement 
 */
function productList(listElement) {
    this.listElement = listElement

}

productList.prototype.init = function(){

}

productList.prototype.addProduct = function(fdcId){
    info(fdcId)
        .then((product) => {
            const productHtml = addProductTemplate({title: product['description']})
            
            //this.listElement.innerHTML = productHtml |diese Schreibweise lädt alle
            //tr elemente neu und ist daher langsam. Nachfolgender Code lädt nur das Neue.
            this.listElement.insertAdjacentHTML("beforeend", productHtml)
        })
}

module.exports = productList