/**
 * @jest-environment jsdom
 */

const ProductNutrients = require("./productNutrients")

describe("ProductNutrients", () => {
    let carbElement, proteinElement, fatElement, productNutrients

    beforeEach(() => {
        carbElement = document.createElement("span")
        proteinElement = document.createElement("span")
        fatElement = document.createElement("span")

        productNutrients = new ProductNutrients(
            carbElement,
            proteinElement,
            fatElement
        )
    })

    test("testing if initializes", () => {
        expect(productNutrients).not.toBeNull()
    })

    describe("setNutrients", () => {
        test("testing writing nutrients to DOM", () => {
            productNutrients.setNutrients({carbs: 100, protein: 150, fat: 200})
            
            expect(carbElement.textContent).toBe("100")
            expect(proteinElement.textContent).toBe("150")
            expect(fatElement.textContent).toBe("200")
        })

        test("testing writing decimal nutrients to DOM", () => {
            productNutrients.setNutrients({carbs: 1.7777, protein: 2.5555, fat: 3.4444})
            
            expect(carbElement.textContent).toBe("1.78")
            expect(proteinElement.textContent).toBe("2.56")
            expect(fatElement.textContent).toBe("3.44")
        })
    })

})