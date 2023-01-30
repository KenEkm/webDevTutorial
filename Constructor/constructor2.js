
function Student(firstname, lastname) {
    const student = {
        firstname: firstname,
        lastname: lastname,
    }
    Object.setPrototypeOf(student, Student.prototype)
    return student
}

Student.prototype.getName = function() {
    return this.firstname + " " + this.lastname
}

const student1 = Student("Chandler", "Bing")
console.log(student1.getName())

const student2 = Student("Monica", "Geller")
console.log(student2.getName())

const studentList = [
    Student("Ross", "Geller"),
    Student("Joey", "Tribbiani")
]

console.log(studentList)