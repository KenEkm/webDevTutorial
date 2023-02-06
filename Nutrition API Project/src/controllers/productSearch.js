
const {search} = require("../api/product")

/**
 * 
 * @param {HtmlInputElement} inputElement 
 * @param {HtmlButtonElement} buttonElement 
 */
function productSearch(inputElement, buttonElement) {
    this.inputElement = inputElement
    this.buttonElement = buttonElement
}

productSearch.prototype.init = function() {
    this.buttonElement.addEventListener("click", (event) => {
        event.preventDefault()

        const inputValue = this.inputElement.value
        this.runSearch(inputValue)
    })
}

/**
 * 
 * @param {String} term 
 */
productSearch.prototype.runSearch = function(term) {
    search(term).then((results) => {
        console.log("results: ", results)
    })
}

module.exports = productSearch