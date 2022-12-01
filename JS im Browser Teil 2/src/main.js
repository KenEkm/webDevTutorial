console.log(document.location.href)

document.addEventListener("DOMContentLoaded", () =>{

    //Zugriff auf Elemente einer Klasse
    const cardHeaders = document.getElementsByClassName("card-header")

    for (const x of cardHeaders){
        const cardBody = x.nextElementSibling
        const cardIcon = x.querySelector(".card-toggle-icon")
        console.log("Card-Headers: ", x)

        //Initiales Einklappen der Karten
        cardBody.classList.add("d-none")

        //toggle funktion für card bodies mit d-none von bootstrap
        x.addEventListener("click", (event) => {

            cardBody.classList.toggle("d-none")

            if(cardBody.classList.contains("d-none")){
                cardIcon.classList.remove("fa-angle-double-down")
                cardIcon.classList.add("fa-angle-double-right")
            } else {
                cardIcon.classList.remove("fa-angle-double-right")
                cardIcon.classList.add("fa-angle-double-down")
            }

        })
    }

    //Zugriff mit spezifischen tags
    const paragraphs = document.getElementsByTagName("p")
    console.log("P-Tags: ", paragraphs)

    //Zugriff mit Query selectors. Verschachtelung mit: .card div.card-header
    const cards = document.querySelectorAll(".card")
    console.log("Cards accessed with query selectors: ", cards)


    const firstCardHeader = cardHeaders[0]

    //Zugriff auf Attribute
    console.log("Attributes: ", firstCardHeader.attributes)

    //Zugriff auf spezifische Attribute. Für den Attributwert .value
    console.log("Spezific Attribute: ", firstCardHeader.attributes.class)
    console.log("Spezific Attribute: ", firstCardHeader.attributes["class"])
    console.log("Spezific Attribute: ", firstCardHeader.attributes["data-extra"])
    console.log("Spezific Attribute: ", firstCardHeader.attributes["data-extra"].value)


    //Beispiel für Hilfe hinweise mit Hilfetext im HTML File.
    const helpElement = document.querySelectorAll("[data-help]")

    for(const z of helpElement){
        z.addEventListener("click", () => {
            
            const helpText = z.attributes["data-help"].value
            alert(helpText)
        })
    }
})