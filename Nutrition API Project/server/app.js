
//Node Server mit http Modul
const http = require("http")
const url = require("url")
const fs = require("fs")
const path = require("path")
const querystring = require("querystring")
const servePublic = require("./public")

const {search, info} = require("./api")

const app = http.createServer((req, res) => {
    try{
        if(req.url === "/"){
            fs.readFile(path.join(__dirname, "..", "public", "index.html"), (err, content) => {
                if(err){
                    res.writeHead(500, {"Content-Type": "text/plain"})
                    res.write("Errorcode 500 Internal Server Error")
                    res.end()
                    return
                }
                res.writeHead(200, {"Content-Type": "test/html"})
                res.write(content)
                res.end()
            })
            return
        }

        const parsedUrl = url.parse(req.url)

    if(parsedUrl.pathname.substr(0, 8) === "/public/"){
        return servePublic(parsedUrl, res)
    }
    if(parsedUrl.pathname.substr(0,5) === "/api/"){
        if(parsedUrl.pathname === "/api/search"){
            const parsedQuery = querystring.parse(parsedUrl.query)
            if("q" in parsedQuery){
                const q = "" + parsedQuery["q"]
                return search(q)
                    .then((data) => {
                        res.writeHead(200, {"Content-Type": "application/json"})
                        res.write(JSON.stringify(data))
                        res.end()
                    })
                    .catch((err) => {
                        res.writeHead(500, {"Content-Type": "text/plain"})
                        res.write("Errorcode 500 Internal Server Error")
                        res.end()
                    })
            } else {
                res.writeHead(422, {"Content-Type": "text/plain"})
                res.write("Errorcode 422 Missing Parameter")
                res.end()
                return
            }
        }
        if(parsedUrl.pathname === "/api/info"){
            const parsedQuery = querystring.parse(parsedUrl.query)
            if("q" in parsedQuery){
                const q = "" + parsedQuery["q"]
                return info(q)
                    .then((data) => {
                        res.writeHead(200, {"Content-Type": "application/json"})
                        res.write(JSON.stringify(data))
                        res.end()
                    })
                    .catch((err) => {
                        res.writeHead(500, {"Content-Type": "text/plain"})
                        res.write("Errorcode 500 Internal Server Error")
                        res.end()
                    })
            } else {
                res.writeHead(422, {"Content-Type": "text/plain"})
                res.write("Errorcode 422 Missing Parameter")
                res.end()
                return
            }
        }
        return
    }
    res.writeHead(404, {"Content-Type": "text/plain"})
    res.write("Errorcode 404 File Not Found")
    res.end()
    }
    catch (err){
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.write("Errorcode 500 Internal Server Error")
        res.end()
    }
    
})

app.listen(8081)