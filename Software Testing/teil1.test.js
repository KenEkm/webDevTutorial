

const {add} = require("./teil1")

test("Calculating  10 + 10", () => {
    const result = add(10 ,10)

    expect(result).toBe(20)
})

test("Calculating 10 + 0", () => {
    const result = add(10 ,0)

    expect(result).toBe(5)
})

