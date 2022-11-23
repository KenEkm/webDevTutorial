//Auslesen der JSON als Text. ACHTUNG: readFileSync ist zu langsam für Profuktivumgebung
const fs = require("fs")
const data = fs.readFileSync("data.json", {encoding: "utf-8"})

console.log(data)

//JSON Text Umwandlung in Objekte -> Array mit Objekten.
const dataObj = JSON.parse(data)

console.log(dataObj)

