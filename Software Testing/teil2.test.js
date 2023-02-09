//Jest plugin für VS Code erleichtert das Testen
const generateGreeting = require("./teil2")


test("Generateing message", () => {
    expect(generateGreeting("Joey Tribbiani")).toBe("hello Joey Tribbiani!")
})

test("Generateing message", () => {
    const greeting = generateGreeting("Joey Tribbiani")
    expect(greeting.indexOf("Joey Tribbiani") !== -1).toBe(true)
})