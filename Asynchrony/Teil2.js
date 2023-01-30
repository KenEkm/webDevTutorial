

const fs = require("fs")

//Sync
//const content = fs.readFileSync("daten.txt", {encoding: "utf-8"})
//console.log(content)


//Async
fs.readFile("daten.txt", {encoding: "utf-8"}, (err, data) => {
    console.log(data)
})

fs.readFile("daten2.txt", {encoding: "utf-8"}, (err, data) => {
    console.log(data)
})

console.log("Test!")

