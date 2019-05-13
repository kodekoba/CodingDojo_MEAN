// Prompt: Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.
// TO-DO: BONUS: Given an object with certain amounts of denominations of US money, alter the object so that the configuration is optimal.

function coinChange(val){
    var changeDict = {};
    var dollars = 0;
    var quarters = 0;
    var dimes = 0;
    var nickels = 0;
    while(val >= 100){
        val -= 100;
        dollars ++;
    }
    while(val >= 25){
        val -= 25;
        quarters ++;
    }
    while(val >= 10){
        val -= 10;
        dimes ++;
    }
    while(val >= 5){
        val -= 5;
        nickels ++;
    }
    if(dollars != 0){
        changeDict.dollars = dollars;
    } 
    if(quarters != 0){
        changeDict.quarters = quarters;
    }
    if(dimes != 0){
        changeDict.dimes = dimes;
    }
    if(nickels != 0){
        changeDict.nickels = nickels;
    }
    if(val != 0){
        changeDict.pennies = val;
    }

    return changeDict;
}

console.log(coinChange(312));
console.log(coinChange(78));
