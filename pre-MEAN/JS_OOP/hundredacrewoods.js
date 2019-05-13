var tigger = { 
    character: "Tigger", 
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
        }
    }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh", greet: function(){
    console.log("AK with a beam, let it eat GRRRRAAAAAWW");
    } };
var piglet = { character: "Piglet", greet: function(){
    console.log("I'm a shy little piggy uwu");
    } }; // create Piglet's home object with just the character attribute
var crob = { character: "Christopher Robin", greet: function(){
    console.log("Yah yeet!");
    } };
var rabbit = { character: "Rabbit", greet: function(){
    console.log("What's in the boooooooooox");
    } };
var gopher = { character: "Gopher", greet: function(){
    console.log("I'm a gopher.");
    } };
var bees = { character: "Bees", greet: function(){
    console.log("Buzz Buzz");
    } };
var owl = { character: "Owl", greet: function(){
    console.log("Hoot my dude");
    } };
var kanga = { character: "Kanga", greet: function(){
    console.log("Lets have a bounce off tigger!");
    } };
var eeyore = { character: "Eeyore", greet: function(){
    console.log("I have depression");
    } };
var heff = { character: "Heffalumps", greet: function(){
    console.log("Watch out! There's a stripy thing that bounces and it goes hoo hoo hoo hoo!");
    } };

// references from certain character's locations
tigger.north = pooh; // tigger
pooh.south = tigger; // pooh
pooh.north = crob;
pooh.east = bees;
pooh.west = piglet;
piglet.east = pooh; // piglet
piglet.north = owl;
bees.north = rabbit; // bees
bees.west = pooh;
owl.east = crob; // owl
owl.south = piglet;
crob.north = kanga; // crob
crob.west = owl;
crob.south = pooh;
crob.east = rabbit;
rabbit.east = gopher; // rabbit
rabbit.west = crob;
rabbit.south = bees;
gopher.west = rabbit; // gopher
kanga.north = eeyore; // kanga
kanga.south = crob;
eeyore.east = heff; // eeyore
eeyore.south = kanga;
heff.west = eeyore; // heff

//extra from given
//piglet.east = tigger.north;          
//tigger.north.west = piglet;
