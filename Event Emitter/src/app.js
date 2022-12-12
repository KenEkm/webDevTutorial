
const todoModule = {
    todos: [
        {title: "HTML lernen", done: true},
        {title: "JavaScript lernen", done:false},
        {title: "Node.js lernen", done:false}
    ],

    addTodo(title){
        for(const todo of this.todos){
            if(todo.title === title){
                return
            }
        }
        const newTodo = {
            title: title,
            done: false
        }
        this.todos.push(newTodo)
        this.emit("add", newTodo)
    },

    completeTodo(title){
        for(const todo of this.todos){
            if(todo.title === title && todo.done === false){
                todo.done = true
                this.emit("complete", todo)
            }
        }
    },

    getTodoCount(){
        let todoCount = 0
        for(const todo of this.todos){
            if(todo.done === fals){
                todoCount++
            }
        }
        return todoCount
    },

    events: {},

    emit(eventName, param){
        if(eventName in this.events){
            for(const f of this.events[eventName]){
                f(param)
            }
        }
    },

    on(eventName, cb){
        if(!(eventName in this.events)){
            this.events[eventName] = []
        }
        this.events[eventName].push(cb)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        newTodo: document.querySelector(".new-todo"),
        todoList: document.querySelector(".todo-list"),
        footer: document.querySelector(".footer"),
        todoCount: document.querySelector(".todo-count strong"),
        clearCompleted: document.querySelector(".clear-completed")
    }

    elements.newTodo.addEventListener("keypress", (event) => {
        if(event.key === "Enter"){
            const todoTitle = elements.newTodo.value
            if(todoTitle !== ""){
                todoModule.addTodo(todoTitle)
            }
        }
    })

    todoModule.on("add", (todo) => {

        const newButtonElement = document.createElement("button")
        newButtonElement.classList.add("destroy")            


        const newLabelElement = document.createElement("label")
        newLabelElement.appendChild(document.createTextNode(todo.title))

        const newInputCheckbox = document.createElement("input")
        newInputCheckbox.type = "checkbox"
        newInputCheckbox.classList.add("toggle")

        const newDivElement = document.createElement("div")
        newDivElement.classList.add("view")
        newDivElement.appendChild(newInputCheckbox)
        newDivElement.appendChild(newLabelElement)
        newDivElement.appendChild(newButtonElement)

        const newLiElement = document.createElement("li")
        newLiElement.appendChild(newDivElement)

        elements.todoList.prepend(newLiElement)
    })

});