
const student = Object.create(Object.prototype, {
    firstname: {
        value: "Joey",
        writable: true,
        configurable: true,
        enumerable: true,
    },
    lastname: {
        value: "Tribbiani",
        writable: true,
        configurable: true,
        enumerable: true,
    },
    subjects: {
        value: [],
        writable: false,
        configurable: false,
        enumerable: true,
    }
})

console.log(student)