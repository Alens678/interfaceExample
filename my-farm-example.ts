interface FarmAnimal {
    age:number;
    genre:string;
    legs:number

}

class Goat implements FarmAnimal {
    age:number;
    genre:string;
    legs: number;
    name:string;
    constructor (age:number, genre:string,name:string){
        this.age = age;
        this.genre =genre;
        this.name = name;
        this.legs = 4;
    }
    jump(): void {
        console.log("JUMP Jump beautiful "+this.name+", age:" + this.age +  ", genre: " + this.genre);
    }
}
class Dog implements FarmAnimal {
    age:number;
    genre:string;
    legs:number;
    name:string;
    constructor (age:number, genre:string,name:string){
        this.age = age;
        this.genre =genre;
        this.name = name;
        this.legs = 4;
    }
    ladrar(): void {
        console.log("BUP BUP "+this.name+", age:" + this.age +  ", genre: " + this.genre);
    }
}

class Bird implements FarmAnimal {
    age:number;
    genre:string;
    legs:number;
    constructor (age:number, genre:string){
        this.age = age;
        this.genre =genre;
        this.legs = 2;

    }
 }
class Hen implements Bird {
    age:number;
    genre:string;
    legs:number;
    race:string;
    eggs:boolean;
    constructor (age:number, genre:string, race:string, eggs:boolean){
        this.age = age;
        this.genre = genre;
        this.race = race;
        this.eggs = eggs;
        this.legs = 2;
    }
}
class Peacock implements Bird {
    age:number;
    genre:string;
    color:string;
    legs:number;
    constructor (age:number, genre:string, color:string){
        this.age = age;
        this.genre =genre;
        this.color = color;
        this.legs = 2;
    }
    fly(): void {
        console.log("Flying "+this.color+" Peacock, age:" + this.age +  ", genre: " + this.genre);
    }
}

const animal1 = new Dog(11,"female", "Xina");
console.log(animal1);
const animal2 = new Dog(11,"male","Xip");
console.log(animal2);
const animal3 = new Dog(11,"male","Xop");
console.log(animal3);
const animal4 = new Goat(4,"female","Mel");
console.log(animal4);
const animal5 = new Goat(4,"female","Mató");
console.log(animal5);
const animal6 = new Goat(3,"male","Oli");
console.log(animal6);
const animal7 = new Goat(3,"female","Sal");
console.log(animal7);
const animal8 = new Goat(3,"female","Pebre");
console.log(animal8);
const animal9 = new Peacock(3,"male", "blue");
console.log(animal9);
const animal10 = new Peacock(3,"female", "green");
console.log(animal10);
const animal11 = new Hen(1,"female","sussex",true);
console.log(animal11);
const animal12 = new Hen(4,"female","penedes",false);
console.log(animal12);
