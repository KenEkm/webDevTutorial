console.log(document.location.href)

//Document Object Model Event Listener: wird ausgeführt wenn alle HTML Elemente geladen sind.
document.addEventListener("DOMContentLoaded", () =>{
    console.log("DOMContentLoaded:", document.readyState)

    const titleElement = document.getElementById("title")

    //Funktion definieren und anschließend an EventListener übergeben
    const onClickTitleElement = () => {
        titleElement.innerText = "Hello Kenan"
    }

    titleElement.addEventListener("click", onClickTitleElement)

    //Oder Funktion im EventListener selbst definieren
    titleElement.addEventListener("mouseenter", () => {
        console.log("Mouse entered")
    })

    titleElement.addEventListener("mouseleave", () => {
        console.log("Mouse left")
    })

    //Klickzähler mit EventListenern
    const buttonIncrement = document.getElementById("button-increment")
    const buttonReset = document.getElementById("button-reset")
    const textCounter = document.getElementById("counter")

    let currentCounter = parseInt(textCounter.innerText, 10)

    buttonIncrement.addEventListener("click", () => {
        currentCounter++
        textCounter.innerText = currentCounter
    })

    buttonReset.addEventListener("click", () => {
        currentCounter = 0
        textCounter.innerText = currentCounter
    })

})