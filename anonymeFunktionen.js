//in JS gibt es 3 Arten von Funktionen
//1. klassisch: function declaration
function sayHello(){
    console.log("Hello")
}
sayHello()

//2. anonyme Funktion(Callback): function Expression. Dabei wird die Fkt wie eine Variable behandelt
const sayHello2 = function() {
    console.log("Hello 2")
}
sayHello2()

//3. anonyme Funktion(Callback): arrow function. Ebenfalls wie Variable mit zusätzlichen möglichkeiten
const sayHello3 = () => {
    console.log("Hello 3")
}
sayHello3()

console.log(sayHello2)//ACHTUNG: ohne() wir die Funktion nicht Ausgeführt. Die Funktion wird als Wert verwendet.

//somit ist dies möglich. Var bekommt als Wert eine Funktion somit ist die Var ausführbar.
const a = sayHello2
a()

//node js verwendet anonyme funktionen/callbacks wie im folgenden bsp.
const fs = require("fs")

fs.readdir(__dirname, (err, files) => {
    console.log(files)
})

//Kurzschreibweise: Wenn Funktion aus einer Codezeile besteht können klammern und return weggelassen werden
x = a => a + 5
console.log(x(4))

