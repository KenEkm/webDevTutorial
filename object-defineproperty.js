
const student = {
    firstname: "Joey",
    lastname: "Tribbiani"
}

Object.defineProperty(student, "id", {
    value: 4,
    writable: false,
    configurable: false,
    enumerable: true,
})

console.log(student)
console.log(Object.getOwnPropertyDescriptor(student, "id"))