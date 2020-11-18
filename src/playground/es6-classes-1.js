
class Person{
    constructor(name = 'Anonymous', age =0) {
       this.name = name; 
       this.age=age;
    }
    getGreeting() {
        //return 'Hi. I am ' + this.name + '!';
        return `Hi. I am ${this.name}!. `;
    }
    getDescription(){
        return`${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major=major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if (this.hasMajor()){
            description += `Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveller extends Person{
    constructor(name, age, traveller){
        super(name,age);
        this.traveller=traveller;
    }
    hasTravelled(){
        return !!this.traveller;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.hasTravelled()){
            greeting += `I am visiting to ${this.traveller}`;
        }

        return greeting;
    }
}

const me = new Traveller('Kiran Ghimire', 18,'Kusunti');
console.log(me.getGreeting());

const other = new Traveller(undefined,undefined,'nowwhere');
console.log(other.getGreeting());