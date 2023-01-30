//Constructor löst Prototype problem

const studentMethods = {
    getName() {
        return this.firstname + " " + this.lastname
    }
}

function Student(firstname, lastname) {
    const student = {
        firstname: firstname,
        lastname: lastname,
    }
    Object.setPrototypeOf(student, studentMethods)
    return student
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