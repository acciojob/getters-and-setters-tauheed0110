class Person {
    constructor(name, age) {
        this._name = name; // Private property for name
        this._age = age;   // Private property for age
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(age) {
        this._age = age;
    }

    // Getter for age (optional, if you want to access age)
    get age() {
        return this._age;
    }
}

// Define the Student class that extends Person
class Student extends Person {
    study() {
        console.log(`${this.name} is studying`);
    }
}

// Define the Teacher class that extends Person
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
