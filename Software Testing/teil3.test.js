
const {students, addStudent} = require("./teil3")

beforeEach(() => {
    students.splice(0, students.length)
    addStudent("Chandler Bing")
})

test("adding student to array", () => {

    addStudent("Monica Geller")
    expect(students.length).toBe(2)

    expect(students).toContain("Chandler Bing")
})

test("should not add existing student to array", () => {

    addStudent("Chandler Bing")
    expect(students.length).toBe(1)

    expect(students).toContain("Chandler Bing")
})