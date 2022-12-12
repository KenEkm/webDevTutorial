
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
            for(const f of this.events){
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
});