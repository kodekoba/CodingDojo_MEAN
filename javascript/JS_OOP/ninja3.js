class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName(){
        console.log("Haiii. " + this.name + " desu~");
    }
    showStats(){
        return ("Name: " + this.name + ", Health: " + this.health  + ", Speed: " + this.speed + ", Stength: " + this.strength);
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

const akiko = new Ninja("Akiko");
akiko.sayName();
console.log(akiko.showStats());
akiko.drinkSake().drinkSake();
console.log(akiko.showStats());

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }
    showStats(){
        console.log("Name: " + this.name + ", Health: " + this.health  + ", Speed: " + this.speed + ", Stength: " + this.strength + ", Wisdom: " + this.wisdom);
    }
    speakWisdom(){
        this.drinkSake();
        console.log("yah yeet thats some good stuff o7");
        return this;
    }
}

const koba = new Sensei("Koba");
koba.showStats();
koba.speakWisdom().showStats();