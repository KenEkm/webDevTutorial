const student = {
    name: "Joe",
    age: 21,
    subject: "Programming",
    "favorite subject": "Photography",
    enrolled: false
}

console.log(student.name + " " + student.age + " " + student.subject)
console.log(student)

student["interestedIn"] = "Photography"
console.log(student)

delete student.interestedIn
console.log(student)

//zugriff auf Objekteigenschaften mit Punktschreibweise oder eckigen Klammern möglich
console.log(student["favorite subject"])

//überprüfen ob eine Eigenschaft existiert
if("subject" in student){
    console.log("Subject-Eigesnchaft existiert")
}

//überprüfen ob Wert für eine Eigenschaft existiert
if(student.enrolled){
    console.log("Wert für Enrolles-Eigesnchaft ist eingetragen.")
}

//for schleife für Objekt keys, values
for(const x in student){
    console.log("object key: " + x + ", value: " + student[x])
}

//object keys Funktion returnt keys als array
console.log(Object.keys(student))

//object values Funktion returnt values als array
console.log(Object.values(student))

//object entries Funktion returnt verschachteltes Array mit key & value Werten
console.log(Object.entries(student))

//zugriff auf das verschachtelte key & value Array z.B. mit for schleife
for(const x of Object.entries(student)){
    console.log(x[0] + " " + x[1])
}

//verschachtelte Objekte & Objekte mit Listen
const students = [
    {firstname: "Joe", lastname: "Tribbiani"},
    {firstname: "Chandler", lastname: "Bing"}
]

console.log(students)

const obj = {
    items: ["apples", "Oranges"]
}

console.log(obj)
