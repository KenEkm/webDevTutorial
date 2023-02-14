//Array.forEach()

const numbers = [1, 2, 3, 4, 5, 6]

/*
for(const n of numbers){
    console.log(n)
}
*/

numbers.forEach((n, i) => console.log(`${i}: ${n}`))


const f = (n) => {
    console.log(n)
}
//Führt Funktion für jedes Element des Arrays aus
numbers.forEach(f)