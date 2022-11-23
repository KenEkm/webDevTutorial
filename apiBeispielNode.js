//API Abfrage mit Node js mit Einsatz von Anonymen Fkt./Callbacks
const https = require("https")

const url = "https://api.spacexdata.com/v5/launches/latest"

https.get(url, res => {
    
    console.log(res.statusCode)
    
    let data = ""
    //Bei Event "data" also dem Empfang der Daten wird folgendes ausgeführt.
    res.on("data", chunk => {
        console.log("chunk: ", chunk)
        data += chunk
    })

    //Bei Ebent "end" also dem ende des Empfangs...
    res.on("end", () => {
        const dataAsObj = JSON.parse(data)
        console.log(dataAsObj)
    })

})