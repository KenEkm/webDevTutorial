//Promises erleichtern die Verwendung von async Funktionen (callback hell)

//const p = Promise.resolve("Hello World")


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World")
    }, 1000)
})


p.then((value) => {
    console.log(value)
})

