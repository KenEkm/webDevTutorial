
const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve("test"), 1000)
})

p.then((data) => {
    console.log(JSON.parse(data))
}).catch((err) => {
    console.log(err)
})
