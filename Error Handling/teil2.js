
const fs = require("fs")

fs.readFile("test2.txt", {encoding: "utf-8"}, (err, contents) =>{
    if(err !== null){
        console.log("Datei nicht gefunden.")
        return
    }
    console.log(contents)
})