
const getId = (() => {
    let counter = 1;

    return() => {
        counter++
        return counter
    }
})()


const todoModule = {
    todos: [],

    addTodo(title){
        const newTodo = {
            id: getId(),
            title: title,
            done: false
        }
        this.todos.push(newTodo)
        this.emit("add", newTodo)
    },

    removeCompletedTodos(){
        for(const todo of this.todos){
            if(todo.done){
                this.removeTodo(todo.id)
            }
        }
    },

    removeTodo(id){
        for(const x in this.todos){
            const todo = this.todos[x]
            if(todo.id === id){
                this.todos.splice(x, 1)
                this.emit("remove", todo)
            }
        }
    },

    completeTodo(id){
        for(const todo of this.todos){
            if(todo.id === id && todo.done === false){
                todo.done = true
                this.emit("changeTodo", todo)
            }
        }
    },

    unCompleteTodo(id){
        for(const todo of this.todos){
            if(todo.id === id && todo.done === true){
                todo.done = false
                this.emit("changeTodo", todo)
            }
        }
    },

    getTodoCount(){
        let todoCount = 0
        for(const todo of this.todos){
            if(todo.done === false){
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

    elements.clearCompleted.addEventListener("click", (event) => {
        todoModule.removeCompletedTodos()
    })

    elements.newTodo.addEventListener("keypress", (event) => {
        if(event.key === "Enter"){
            const todoTitle = elements.newTodo.value
            if(todoTitle !== ""){
                todoModule.addTodo(todoTitle)
                elements.newTodo.value = ""
            }
        }
    })

    todoModule.on("add", (todo) => {

        const newButtonElement = document.createElement("button")
        newButtonElement.classList.add("destroy")            

        newButtonElement.addEventListener("click", (event) => {
            todoModule.removeTodo(todo.id)
        })

        const newLabelElement = document.createElement("label")
        newLabelElement.appendChild(document.createTextNode(todo.title))

        const newInputCheckbox = document.createElement("input")
        newInputCheckbox.type = "checkbox"
        newInputCheckbox.classList.add("toggle")

        newInputCheckbox.addEventListener("change", (event) => {
            const checkboxChecked = newInputCheckbox.checked
            if(checkboxChecked){
                todoModule.completeTodo(todo.id)
            } else {
                todoModule.unCompleteTodo(todo.id)
            }
            console.log("todoModule: ", todoModule)
        })

        const newDivElement = document.createElement("div")
        newDivElement.classList.add("view")
        newDivElement.appendChild(newInputCheckbox)
        newDivElement.appendChild(newLabelElement)
        newDivElement.appendChild(newButtonElement)

        const newLiElement = document.createElement("li")
        newLiElement.setAttribute("data-id", todo.id)
        newLiElement.appendChild(newDivElement)

        elements.todoList.prepend(newLiElement)
    })

    todoModule.on("remove", (todo) => {
        const liElement = elements.todoList.querySelector("li[data-id='" + todo.id + "']")
        liElement.remove()
    })

    todoModule.on("changeTodo", (todo) => {
        const liElement = elements.todoList.querySelector("li[data-id='" + todo.id + "']")
        if(todo.done){
            liElement.classList.add("completed")
        } else {
            liElement.classList.remove("completed")
        }
    })

    const refreshFooter = () => {
        elements.todoCount.innerText = todoModule.getTodoCount()
    }
    todoModule.on("add", refreshFooter)
    todoModule.on("changeTodo", refreshFooter)
    todoModule.on("remove", refreshFooter)

});