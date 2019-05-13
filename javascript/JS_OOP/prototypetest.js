var MyObjConstructor = function(name) {
    var myPrivateVar = "Hello"; // just to show that it is difficult to see this private var
    this.name = name; // but you can see the name!
    this.method = function() {
      console.log( "I am a method");
    };
}
var obj1 = new MyObjConstructor('object1');
var obj2 = new MyObjConstructor('object2');
console.log(obj1);
//console.log(obj1.method);
obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";
console.log(obj1.newProperty); // newProperty!
console.log(obj1.anotherProperty); // anotherProperty!
// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!
//Very cool! While, expectedly, the line obj1.newProperty = 'newProperty!' gave obj1 a new property that obj2 couldn't access, the code obj1.__proto__.anotherProperty = 'anotherProperty!' can be accessed by both obj1 and obj2.
//That's because they both share a prototype object since they're both instances of MyObjConstructor. That's how JavaScript does inheritance! 

//The above is bad practice, however. The following is the best way:
function Cat(catName) {
    var name = catName;
    this.getName = function() {
      return name;
    };
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function() {
    console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
var muffin = new Cat('muffin');
var biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
// we may change an instance's attributes rather than keeping the value set by prototype
muffin.numLegs = 3;
// poor mutant cats: muffin.__proto__.numLegs ++;
// doing this to muffin will cause all the cats to have 5 legs, but muffin will still have 3 legs