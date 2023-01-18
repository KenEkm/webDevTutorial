//Erzeugt Objekt, setzt Konstruktorfunktion

function Student(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
}

Student.prototype.getName = function() {
    return this.firstname + " " + this.lastname
}

const student1 = new Student("Chandler", "Bing")
console.log(student1.getName())

const student2 = new Student("Monica", "Geller")
console.log(student2.getName())
