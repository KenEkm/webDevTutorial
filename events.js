
const studentModule = {
    students: ["Chandler Bing"],

    onAddStudent: function(name){},

    addStudent(name){
        this.students.push(name)

        this.onAddStudent(name)
    }
}

const bankModule = {
    chargeForStudent(name){
        console.log("Beitrag wird abgebucht für: " + name)
    }
}

//überschreibt onAddStudent Funktion. Nur an einer Stelle möglich. Sonst siehe events2.js
studentModule.onAddStudent = (name) => {
    bankModule.chargeForStudent(name)
}

studentModule.addStudent("Joey Tribbiani")