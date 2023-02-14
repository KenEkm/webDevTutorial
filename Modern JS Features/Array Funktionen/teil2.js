//Array.filter()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbers2 = numbers.filter((value) => {
    if(value % 2 === 0) return true
    else return false
})
//oder
const numbers3 = numbers.filter((value) => value % 2 === 0)

console.log(numbers3)


const numbers4 = numbers
    .filter(v => v % 2 === 0)
    .map(v => v * 10)

console.log(numbers4)