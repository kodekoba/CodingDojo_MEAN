function fizzBuzz(num){
    if(num <= 0 || num % 1 != 0){
        return null;
    }
    var arr = [];
    for(var i=1; i<num+1; i++){
        if(i % 15 == 0){
            arr.push("and FizzBuzz.");
        } else if(i % 5 == 0){
            arr.push("Buzz");
        } else if(i % 3 == 0){
            arr.push("Fizz");
        } else {
            arr.push(i);
        }
    }
    return arr.toString();
}

// "Error" cases
console.log(fizzBuzz("fifteen"));
console.log(fizzBuzz(0));
console.log(fizzBuzz(-2));
console.log(fizzBuzz(5.2));

// Real case
console.log(fizzBuzz(15));