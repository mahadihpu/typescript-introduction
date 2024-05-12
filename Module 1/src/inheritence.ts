
{class Person {
    name: string;
    age: number;
    address: string;

    constructor(name:string,age: number,address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(){
        console.log(`I am ${this.name} with the age of ${this.age} `)
    }
}


class Student extends Person{
    major: string;
    constructor(name: string, age: number,address: string, major: string){
        super(name , age, address);
        this.major = major;
    }

    doStudy(){
        console.log(`I am a student. My name is ${this.name} and my major is ${this.major}`)
    }
}

class Teacher extends Person{
    designation: string;
    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address);
        this.designation = designation;
    }

    giveLecture(){
        console.log(`I am a teacher. And the name is ${this.name}. Im ${this.age} years old and my designation is ${this.designation}`)
    }
}

const student1 = new Student("Mahadi",27,"Bangladesh", "Computer Science");

const teacher1 = new Teacher("Wang jie Feng", 49, "China", "Assistant Professor")

}

