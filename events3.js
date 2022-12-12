
const studentModule = {
    students: ["Chandler Bing"],

    //Element für mehrere Vorgänge mit jeweils mehreren Funktionen: add, remove, ...
    events: {
        add: []
    },

    addStudent(name){
        this.students.push(name)

        //Zugriff auf alle Funktionen der Liste in studentModule
        for(const f of this.events.add){
            f(name)
        }
    },

    //für elegantere Schreibweise bei Zugriff auf Vorgänge
    addEventsAddCallback(cb){
        this.events.add.push(cb)
    }
}

const bankModule = {
    chargeForStudent(name){
        console.log("Beitrag wird abgebucht für: " + name)
    }
}

//Einsatz der eleganteren Schreibweise
studentModule.addEventsAddCallback((name) => {
    bankModule.chargeForStudent(name)
})

/*
studentModule.events.add.push((name) => {
    bankModule.chargeForStudent(name)
})
*/

studentModule.addStudent("Joey Tribbiani")