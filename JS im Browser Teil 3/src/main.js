
document.addEventListener("DOMContentLoaded", () =>{

    const closeButtons = document.querySelectorAll("[data-dismiss='alert']")

    for(const x of closeButtons){
        x.addEventListener("click", () => {
            x.parentElement.remove()
        })
    }
})