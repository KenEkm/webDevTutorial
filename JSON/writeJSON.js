const data = [
    {firstname: "Rachel", age: 22, enrolled: false},
    {firstname: "Ross", age: 23, enrolled: true}
]

//Daten in String umwandeln für JSON
const dataAsJSON = JSON.stringify(data)

console.log(dataAsJSON)

//String als JSON file generieren. ACHTUNG: writeFileSync ist auch langsam.
const fs = require("fs")
fs.writeFileSync("writtenJSON.json", dataAsJSON)
