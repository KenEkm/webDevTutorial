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
    on(".product-search__amount", "change", (event) => {
        const fdcId = parseInt(event.handleObj.getAttribute("data-fdc"), 10)
        const value = parseInt(event.handleObj.value, 10)
        this.updateAmount(fdcId, value)
    })
}

productList.prototype.getNutrientsForProduct = function (product){
    const nutrients = {
        carbs: 0,
        protein: 0,
        fat: 0
    }
    for(const foodNutrient of product.product.foodNutrients){
        if(foodNutrient.nutrientNumber === "205"){
            nutrients.carbs = foodNutrient.value
        } else if(foodNutrient.nutrientNumber === "204"){
            nutrients.fat = foodNutrient.value
        } else if(foodNutrient.nutrientNumber === "203"){
            nutrients.protein = foodNutrient.value
        }
    }
    return {
        carbs: (nutrients.carbs / 100) * product.amount,
        protein: (nutrients.protein / 100) * product.amount,
        fat: (nutrients.fat / 100) * product.amount
    }
}

productList.prototype.getNutrients = function(){
    const nutrients = {
        carbs: 0,
        protein: 0,
        fat: 0
    }

    for(const product of this.products){
        const productNutrients = this.getNutrientsForProduct(product)

        nutrients.carbs += productNutrients.carbs
        nutrients.protein += productNutrients.protein
        nutrients.fat += productNutrients.fat
    }
    return nutrients
}

productList.prototype.updateAmount = function(fdcId, value){
    for(const product of this.products){
        if(product.product['fdcId'] === fdcId){
            product.amount = value
            break
        }
    }
    console.log("updateAmount: " + value)
}

productList.prototype.removeProduct = function(fdcId){
    for(const i in this.products){
        const product = this.products[i]
        if(product.product['fdcId'] === fdcId){
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
            this.products.push({
                amount:100,
                product: product
            })
            const productHtml = addProductTemplate({
                title: product['description'],
                fdcId: product['fdcId']
            })
            
            //this.listElement.innerHTML = productHtml |diese Schreibweise lädt alle
            //tr elemente neu und ist daher langsam. Nachfolgender Code lädt nur das Neue.
            this.listElement.insertAdjacentHTML("beforeend", productHtml)

            //this.getNutrients()
        })
}

module.exports = productList