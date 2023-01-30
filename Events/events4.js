
const studentModule = {
    students: ["Chandler Bing"],

    //Element für mehrere Vorgänge mit jeweils mehreren Funktionen: add, remove, ...
    events: {
        add: []
    },

    addStudent(name){
        this.students.push(name)
        this.trigger("add", name)
    },

    //ausgelagert für eleganteren Zugriff
    trigger(eventName, name){
        for(const f of this.events[eventName]){
            f(name)
        }
    },

    /*
    addEventsAddCallback(cb){
        this.events.add.push(cb)
    },
    */

    //gleich wie addEvent... aber für verschiedene events
    on(eventName, cb){
        this.events[eventName].push(cb)
    }
}

const bankModule = {
    chargeForStudent(name){
        console.log("Beitrag wird abgebucht für: " + name)
    }
}

//Einsatz der eleganteren Schreibweise
studentModule.on("add", (name) => {
    bankModule.chargeForStudent(name)
})

studentModule.addStudent("Joey Tribbiani")