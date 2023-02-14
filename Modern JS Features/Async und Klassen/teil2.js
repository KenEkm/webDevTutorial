/*
function Student(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

Student.prototype.getname = function() {
    console.log(`${this.firstname}, ${this.lastname}`)
}
*/

//alternative Schreibweise
class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    getName() {
        console.log(`${this.firstname}, ${this.lastname}`)
    }
}

const joey = new Student("Joey", "Tribbiani")
joey.getName()