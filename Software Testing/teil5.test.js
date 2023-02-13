

const {resolveAsync, resolvePromise} = require("./teil5")

//Verwende done um timeout von 1000ms abzufangen! Sonst fehlerhaftes Eestergebnis.
test("resolveAsync should call callback", done => {
    resolveAsync((message) => {
        expect(message).toBe("Hallo Welt!")

        done()
    })
})

//Verwende .then bei Promise.
test("resolvePromise should resolve", () => {
    return resolvePromise().then((message) => {
        expect(message).toBe("Hallo Welt!")
    })
})

//Verwende alternativ async() und await bei Promise.
test("resolvePromise should resolve", async () => {
    const message = await resolvePromise()
    expect(message).toBe("Hallo Welt!")
})