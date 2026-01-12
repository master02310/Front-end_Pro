function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthYear = birthYear
    this.grades = grades

    this.attendance = new Array(25).fill(undefined)

    this.getAge = function () {
        const currentYear = new Date().getFullYear()
        return currentYear - this.birthYear
    }

    this.getAverageGrade = function () {
        if (this.grades.length === 0) return 0

        let sum = 0
        for (let grade of this.grades) {
            sum += grade
        }
        return sum / this.grades.length
    }

    this.present = function () {
        const index = this.attendance.indexOf(undefined)
        if (index === -1) {
            console.log("Усі заняття вже відмічені")
            return
        }
        this.attendance[index] = true
    }

    this.absent = function () {
        const index = this.attendance.indexOf(undefined)
        if (index === -1) {
            console.log("Усі заняття вже відмічені")
            return
        }
        this.attendance[index] = false
    }

    this.summary = function () {
        const avgGrade = this.getAverageGrade()

        const attendedCount = this.attendance.filter(item => item === true).length
        const totalClasses = this.attendance.filter(item => item !== undefined).length
        const avgAttendance = totalClasses === 0 ? 0 : attendedCount / totalClasses

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!"
        }

        if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще"
        }

        return "Редиска!"
    }
}

const student1 = new Student("Іван", "Петренко", 2003, [95, 92, 88, 96])
const student2 = new Student("Дмитро", "", 2001, [97, 90, 92, 94, 80, 99])
const student3 = new Student("<UNK>", "<UNK>", 2005, [95, 92, 88, 96, 60, 75])


student1.present()
student1.present()
student1.present()
student1.absent()

console.log(student1.getAge())
console.log(student1.getAverageGrade())
console.log(student1.summary())

student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.present()
student2.absent()

console.log(student2.getAge())
console.log(student2.getAverageGrade())
console.log(student2.summary())

student3.present()
student3.present()
student3.present()
student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.absent()

console.log(student3.getAge())
console.log(student3.getAverageGrade())
console.log(student3.summary())