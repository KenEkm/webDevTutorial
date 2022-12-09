
const studentModule = {
    students: ["Chandler Bing"],

    //Enthält Liste mit Funktionen
    onAddStudent: [
        function(name){
            console.log("Student module: " + name)
        }
    ],

    //oder mit leerer Liste für Funktionen starten
    //onAddStudent: [],

    addStudent(name){
        this.students.push(name)

        //Zugriff auf alle Funktionen der Liste in studentModule
        for(const f of this.onAddStudent){
            f(name)
        }
    }
}

const bankModule = {
    chargeForStudent(name){
        console.log("Beitrag wird abgebucht für: " + name)
    }
}

//Funktion wird nicht mehr überschrieben sondern mit .push in die Liste der Funktionen ergänzt.
studentModule.onAddStudent.push((name) => {
    bankModule.chargeForStudent(name)
})

studentModule.addStudent("Joey Tribbiani")