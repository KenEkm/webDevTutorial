"use strict"

document.addEventListener("DOMContentLoaded", () =>{

    const closeButtons = document.querySelectorAll("[data-dismiss='alert']")
    const addStudentButton = document.getElementById("add-student")
    const nameInput = document.getElementById("nameInput")
    const studentList = document.getElementById("students-list")
    const agbInput = document.getElementById("agbInput")

    const liElement = document.querySelectorAll(".list-group-item")

    const removeLiElement = (liElement) => {
        liElement.remove()
    }

    for (const x of liElement){
        x.addEventListener("click", () => {
            removeLiElement(x)
        })
    }

    for(const x of closeButtons){
        x.addEventListener("click", () => {
            x.parentElement.remove()
        })
    }

    addStudentButton.addEventListener("click", (event) => {
        event.preventDefault()

        if(agbInput.checked === false){
            alert("Bitte AGB lesen!")
            return
        }

        const text = nameInput.value

        if(text === ""){
            return
        }

        const strongElement = document.createElement("strong")
        strongElement.appendChild(document.createTextNode(text))

        const liElement = document.createElement("li")
        liElement.appendChild(strongElement)
        liElement.classList.add("list-group-item")

        liElement.addEventListener("klick", () => {
            removeLiElement(liElement)
        })

        studentList.appendChild(liElement)

        nameInput.value = ""
    })

    nameInput.addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
            console.log("Enter wurde gedrückt.")
        }
    })

})