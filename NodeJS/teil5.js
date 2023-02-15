
//Node Server mit http Modul
const http = require("http")
const url = require("url")

const servePublic = require("./public")


const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url)

    if(parsedUrl.pathname.substr(0, 8) === "/public/"){
        return servePublic(parsedUrl, res)
    }
    return
})

app.listen(8090)
//node teil1.js startet den Server. Strg + c zum Beenden.