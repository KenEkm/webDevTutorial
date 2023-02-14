// Vererbung mit extends und super

class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }

    getName() {
        console.log(`${this.firstname}, ${this.lastname}`)
    }
}

class LanguageStudent extends Student {
    constructor(firstname, lastname, language) {
        super(firstname, lastname)
        this.language = language
    }

    getLanguage() {
        console.log(`${this.language}`)
    }
}

const joey = new LanguageStudent("Joey", "Tribbiani", "Italian")
joey.getName()
joey.getLanguage()