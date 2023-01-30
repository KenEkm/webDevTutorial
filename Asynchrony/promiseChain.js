

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World")
    }, 1000)
})


p
    .then((value) => {
        console.log("value: " + value)
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("!!!"), 1000)
        })
    })
    .then((value) => {
        console.log("p2: " + value)
    })

