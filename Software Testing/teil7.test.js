/**
 * @jest-environment jsdom
 */

const makeCounter = require("./teil7")

test("increment button", () => {
    const button = document.createElement("button")
    button.textContent = 0

    makeCounter(button)

    button.click()

    expect(button.textContent).toBe("1")
})