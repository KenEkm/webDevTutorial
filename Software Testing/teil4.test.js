
const StudentModule = require("./teil4")

test("adding student", () => {
    const studentModule = new StudentModule()

    studentModule.addStudent("Ross Geller")

    expect(studentModule.students.length).toBe(1)
    expect(studentModule.students).toContain("Ross Geller")

})