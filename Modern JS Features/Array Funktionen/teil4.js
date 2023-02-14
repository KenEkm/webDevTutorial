//Array.find(), Array.findIndex()

const students = [
    {firstname: "Joey"},
    {firstname: "Tribbiani"}
]

//console.log(students.indexOf("Joey"))

const s = students.find((student => student.firstname === "Joey"))
console.log(s)

const f = students.findIndex((student => student.firstname === "Joey"))
console.log(f)