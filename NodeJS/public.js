
const path = require("path")
const fs = require("fs")
const mimeTypes = require("mime-types")


module.exports = function(parsedUrl, res){

    // /.. request in url ist Sicherheitsrisiko, da dir gewechselt wird.
    //mit path können Sonderzeichen bereinigt werden
    const sanitizePath = path.normalize(parsedUrl.pathname.substr(7)).replace(/^(\.\.[\/\\])+/, '')
    console.log("sanitizePath: ", sanitizePath)

    const absolutePath = path.join(__dirname, "public", sanitizePath)

    fs.exists(absolutePath, (exists) => {
        if(!exists){
            res.writeHead(404, {
                "Content-Type": "text/plain"
            })
        
            res.write("404 Not Found")
            res.end()
        } else {
            fs.readFile(absolutePath, (err, content) => {
                if(err){
                    res.writeHead(500, {
                        "Content-Type": "text/plain"
                    })
                
                    res.write("500 Internal Server Error")
                    res.end()
                } else {
                    res.writeHead(200, {
                        "Content-Type": mimeTypes.lookup(sanitizePath)
                    })
                
                    res.write(content)
                    res.end()
                }
            })
        }
    })
}