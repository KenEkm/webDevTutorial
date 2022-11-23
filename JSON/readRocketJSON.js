const fs = require("fs")
const rocketAsString = fs.readFileSync("rockets.json", {encoding: "utf-8"})

const rockets = JSON.parse(rocketAsString)
//console.log(rockets)

console.log(rockets[0]["height"])
console.log(rockets[0]["first_stage"]["thrust_sea_level"])

for(const x of rockets){
    console.log(x["name"])
}

