
//Node Server mit http Modul
const http = require("http")
const url = require("url")

const servePublic = require("./public")

const obj = {
    fistname: "Chandler",
    lastname: "Bing"
}


const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url)

    if(parsedUrl.pathname.substr(0, 8) === "/public/"){
        return servePublic(parsedUrl, res)
    }

    //für das JSON Format z.B. als API
    if(req.url === "/student.json"){
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
    
        res.write(JSON.stringify(obj))
        res.end()
        return
    }

    return
})

app.listen(8090)
//node teil1.js startet den Server. Strg + c zum Beenden.