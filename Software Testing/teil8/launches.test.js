
//APIs werden in der Regel gemockt und seperat getestet

jest.mock("./api")

const {getMessage} = require("./launches")

test("check generated message", () => {
    return getMessage().then((message) => {
        expect(message).toBe("Have a nice flight: ArabSat 6A!")
    })
})