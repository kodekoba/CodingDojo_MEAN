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
    this.punch = function(target){
        target.health -= 5;
        console.log(this.name + " punched " + target.name + " and dealt 5 damage! pew pew");
    }
    this.kick = function(target){
        target.health -= (strength * 15);
        console.log(target.name + " was kicked by " + this.name + " and lost " + (strength * 15) + " health!")
    }
}

var akiko = new Ninja("Akiko");
var enemy = new Ninja("Enemy");

akiko.punch(enemy);
akiko.kick(enemy);
console.log(enemy.showStats());
