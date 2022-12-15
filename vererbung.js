

const studentActions = {
    getName: function(){
        return this.firstname + " " + this.lastname 
    }
}


const student = Object.create(studentActions, {
    firstname: {
        value: "Joey",
        enumerable: true
    },
    lastname: {
        value: "Tribbiani",
        enumerable: true
    }
})

const student2 = Object.create(studentActions, {
    firstname: {
        value: "Monica",
        enumerable: true
    },
    lastname: {
        value: "Geller",
        enumerable: true
    }
})

console.log(student.getName())
console.log(student2.getName())

