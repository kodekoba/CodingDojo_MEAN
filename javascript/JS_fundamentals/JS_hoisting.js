// Rewrite the code the way it would be seen by the interpreter and predict the output.
// After you've made your prediction, run the original code to find out if you were right! If your predictions were incorrect, look back at how the code is hoisted by the interpreter.

// 1
// Given:
// console.log(hello);
// var hello = 'world';
var hello;
console.log(hello);
hello = 'world';
// logs undefined

// 2
// Given:
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// } 
var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();
// logs 'magnet'

// 3
// Given:
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);
var brendan;
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
// logs 'super cool'

// 4
// Given:
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = ('chicken');
console.log(food);
eat();
// logs 'chicken'
// logs 'half-chicken'

// 5 
// Given:
// mean();
// console.log(food2);
// var mean = function() {
// 	food2 = "chicken";
// 	console.log(food2);
// 	var food2 = "fish";
// 	console.log(food2);
// }
// console.log(food2);

// mean();
// var mean = function() {
//     var food2;
//     food2 = "chicken";
//     console.log(food2);
//     food2 = "fish";
//     console.log(food2);
// }
// console.log(food2);
// console.log(food2);

// 6
// Given:
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
var genre;
function rewind() {
    var genre;
    genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
console.log(genre);
genre = "disco"
rewind();
console.log(genre);
// logs undefined
// logs "rock"
// logs "r&b"
// logs "disco"

// 7
// Given:
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);

function learn(){
    var dojo;
    dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
// logs "san jose"
// logs "seattle"
// logs "burbank"
// logs "san jose"

// 8 - Bonus
// Given:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

// logs {name: Chicago, students: 65, hiring: true}
// logs TypeError - we are attempting to change a dictionary to a string but it must be a constant type!