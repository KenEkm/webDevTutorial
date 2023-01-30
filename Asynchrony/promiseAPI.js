
const axios = require("axios")

const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json"

const p = axios.get(url)

console.log(p)

p.then((response) => {
    console.log("1EUR entsprechen aktuell: " + response.data.eur.usd + " USD")
    console.log("1EUR entsprechen aktuell: " + response.data.eur.try + " TRY")
})
