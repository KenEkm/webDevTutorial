

class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname

        //ermöglich späteren Aufruf mit joey.getName
        this.getName = this.getName.bind(this)
    }

    getName() {
        console.log(`${this.firstname}, ${this.lastname}`)
    }
}

const joey = new Student("Joey", "Tribbiani")
setTimeout(joey.getName, 1000)