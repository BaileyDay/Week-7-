class mom {
    constructor(firstname, lastName, eyeColor, hairColor){
    this.firstName = firstname;
    this.lastName = lastName;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
    };

    showInfo(){
        console.log(
            `First Name: ${this.firstName}
            Last Name: ${this.lastName}
            Eye Color: ${this.eyeColor}
            Hair Color: ${this.hairColor}
            `)
    }

};

class daughter extends mom {
    constructor(firstName, hairColor, mom){
        super(firstName, mom, mom, hairColor)
        this.lastName = mom.lastName
        this.eyeColor = mom.eyeColor;
    }

};

const Alice = new mom('Alice', 'Wong', 'brown', 'black');

const Ilene = new daughter('Ilene', 'brown', Alice);

Alice.showInfo()

Ilene.showInfo()



class Person {
    constructor(name){
        
        this.name = name;
        this.friends = []; 
    }
  

addFriend(friend){
    this.friends.push(friend.name);
};

createGreeting(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
};

greet(other) {
    console.log(this.createGreeting(other));
}};


const jack = new Person("jack");
const mike = new Person('mike');

jack.greet(mike);
