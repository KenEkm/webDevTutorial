//Array.map()

const numbers = [1, 2, 3, 4]

/*
const numbers2 = []
for(const n of numbers){
    numbers2.push(n * 2)
}
*/

const numbers2 = numbers.map((value) => {
    return value * 2
})
//oder
const numbers3 = numbers.map((value) => value * 2)

console.log(numbers3)


const students = [
    {firstname: "Joey", lastname: "Tribbiani"},
    {firstname: "Chandler", lastname: "Bing"},
    {firstname: "Ross", lastname: "Geller"}
]

const names = students.map((value, index) => `${index}: ${value.firstname} ${value.lastname}`)

console.log("names: ", names)