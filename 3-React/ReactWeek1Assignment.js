class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(studentToRegister) {
        if(this.students.filter(student => student.email === studentToRegister.email).length === 0) {
            console.log(`Registering ${studentToRegister.email} to the bootcamp Web Dev Fundamentals.`);
            this.students.push(studentToRegister);
        } else {
            console.log(`${this.student} has already been registered.`);
        } return this.students
    }
};