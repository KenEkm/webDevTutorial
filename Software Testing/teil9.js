

function StudentModule() {
    this.students = []
}

StudentModule.prototype.addStudent = function(name) {
    if(this.students.indexOf(name) === -1){
        this.students.push(name)
    }
}

StudentModule.prototype.removeStudent = function(name) {
    const position = this.students.indexOf(name)
    if(position !== -1) {
        this.students.splice(position, 1)
    }
}

module.exports = StudentModule