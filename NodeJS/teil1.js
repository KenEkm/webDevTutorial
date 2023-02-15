
//Node Server mit http Modul
const http = require("http")

const app = http.createServer((req, res) => {
    console.log("Server wurde erstellt.")

    res.writeHead(404, {
        "Content-Type": "text/html"
    })

    res.write("<strong>Hallo Welt</strong>")
    res.end()
})

app.listen(8090)
//node teil1.js startet den Server. Strg + c zum Beenden.