
//Node Server mit http Modul
const http = require("http")

const app = http.createServer((req, res) => {
    console.log("Server wurde erstellt.")
    console.log("requested url: " + req.url)

    if(req.url === "/"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write("<strong>Startseite...</strong>")
        res.end()
        return
    } else if(req.url === "/home"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })

        res.write("<strong>Home...</strong>")
        res.end()
        return
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        })
    
        res.write("<strong>404 not found!</strong>")
        res.end()
    }
})

app.listen(8090)
//node teil1.js startet den Server. Strg + c zum Beenden.