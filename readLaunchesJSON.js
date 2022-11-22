const fs = require("fs")
const launchesAsString = fs.readFileSync("launches.json", {encoding: "utf-8"})

const launches = JSON.parse(launchesAsString)

let succ = 0
let unSucc = 0

function successfulLaunchCount(){
    for(const x of launches){
        console.log(x["success"])
        if(x["success"]){
            succ++
        }
        else if(x["success"] == false){
            unSucc++
        }
    }
}

successfulLaunchCount()
console.log("Successful launches: " + succ)
console.log("Unsuccessful launches: " + unSucc)

