const api = require("./api")

function getMessage() {
    return api.getLastMission().then((name) => {
        return "Have a nice flight: " + name + "!"
    })
}

/*
getMessage().then((message) => {
    console.log(message)
})
*/

module.exports.getMessage = getMessage