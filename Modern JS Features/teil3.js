

const student = {
    firstname: "Chandler",
    lastname: "Bing"
}

/*
const firstname = student.firstname
const lastname = student.lastname
*/

const {firstname, lastname} = student

console.log(firstname, lastname)

//Objekteigenschaften werden im Funktionsaufruf selektiert. Standardwerte für leere Funktionsparameter.
function print({firstname, lastname = "", age = 25}){
    console.log(firstname, lastname, age)
}

print(student)
print({firstname: "Max", age: 30})