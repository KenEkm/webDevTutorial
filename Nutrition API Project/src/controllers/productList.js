"use strict"

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
    console.log("fdcId: " + fdcId)
}

module.exports = productList