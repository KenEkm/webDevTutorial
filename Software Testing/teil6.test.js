/**
 * @jest-environment jsdom
 */

beforeEach(() => {
    document.body.innerHTML = "<button id='counter'>0</button>"
})

test("incrementing counter", () => {
    const button = document.getElementById("counter")
    expect(button.textContent).toBe("0")

    require("./teil6")

    button.click()
    expect(button.textContent).toBe("1")
})