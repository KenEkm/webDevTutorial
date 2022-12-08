
const data = {
    todos: ["JavaScript lernen", "Node.js lernen"],
    addTodo: function(todo){
        this.todos.push(todo)
        this.printTodos()
    },
    printTodos: function(){
        console.log(this.todos)
    }

}

data.addTodo("new Todo")

const printStudentname = function(){
    console.log(this.lastname + ", " + this.firstname)
}

const students = [
    {
        firstname: "Joey",
        lastname: "Tribbiani",
        printName: printStudentname
    },
    {
        firstname: "Monica",
        lastname: "Geller",
        printName: printStudentname
    }
]

students[0].printName()
students[1].printName()
