function Ninja(name){
    this.name = name;
    this.health = 100;

    var self = this;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        return "My name is " + this.name + " nwn";
    }
    this.showStats = function(){
        return ("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Stength: " + strength);
    }
    this.drinkSake = function(){
        this.health += 10;
        return this;
    }
}

var akiko = new Ninja("Akiko");
console.log(akiko.sayName());
console.log(akiko.showStats());
akiko.drinkSake().drinkSake();
console.log(akiko.showStats());