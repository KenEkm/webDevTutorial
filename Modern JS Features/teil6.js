

const a = ["A", "B"]

const [var1, var2] = a

console.log(var1)

//Werte aus Funktionsaufruf werden in Liste gepackt.
function x(...values) {
    console.log(values)
}

x(1, 2, 3)

//Umgekehrt kann auch eine Liste in ihre Einzelwerte aufgedröselt werden.
const n = [1, 2, 3, 4, 5, 6]
console.log(Math.max(...n))



const m = [3, 4, 5]
const s = [1, 2, ...m, 6, ...m]

console.log(s)


const obj = {lastname: "Bing"}

const chand = {
    ...obj,
    firstname: "Chandler"
}

console.log(chand)