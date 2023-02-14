//asyn function, await und try/catch ersetzen .then/.catch für asynchrone Funktionen

const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello world"), 1000)
})

const e = new Promise((resolve, reject) => {
    setTimeout(() => reject("error!"), 1000)
})

async function f() {
    try {
        const value = await p
        console.log(value)

        const value2 = await e
        console.log(value2)
    } catch(err) {
        console.log(err)
    }
}

console.log(f())