/*
Create a class called Person which accepts the name of a person as a string, and his/her age as a number.

The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".
*/

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`Hi my name is ${this.name}.`);
    }
    describe(){
        console.log(`I am ${this.age} years old.`);
    }
}

const me = new Person('Bailey', 24);


class Teacher extends Person {
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }

    teach(){
        console.log(`${this.name} teaches the subject ${this.subject}`);
    }

}

/*
Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
*/

const Sean = new Teacher('Sean', 47, 'Cooking');

console.log(me);
me.sayHello();
me.describe();
Sean.teach();