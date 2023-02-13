

const StudentModule = require("./teil9")

describe("StudentModule", () => {
    test("testing constructur", () => {
        const s = new StudentModule()
        expect(s.students).not.toBeNull()
    })
})

describe("addStudent", () => {
    test("testing adding a student", () => {
        const s = new StudentModule()
        s.addStudent("Chandler Bing")
        expect(s.students.length).toBe(1)
        expect(s.students).toContain("Chandler Bing")
    })
})

describe("removeStudent", () => {
    let s
    beforeEach(() => {
        s = new StudentModule()
        s.addStudent("Chandler Bing")
        s.addStudent("Joey Tribbiani")
    })

    test("testing removing a student", () => {
        s.removeStudent("Joey Tribbiani")

        expect(s.students.length).toBe(1)
        expect(s.students).not.toContain("Joey Tribbiani")
        expect(s.students).toContain("Chandler Bing")
    })

    test("testing removing a student that doest exist", () => {
        s.removeStudent("Ross Geller")

        expect(s.students.length).toBe(2)
        expect(s.students).toContain("Joey Tribbiani")
        expect(s.students).toContain("Chandler Bing")
    })

})