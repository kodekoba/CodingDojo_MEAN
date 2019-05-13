class Card{
    constructor(suit,strVal,numVal){
        this.suit = suit;
        this.strVal = strVal;
        this.numVal = numVal;
    }
    showInfo(){
        console.log(this.strVal + " of " + this.suit);
        //console.log("Suit: " + this.suit + ", String Value: " + this.strVal + ", Numerical Value: " + this.numVal);
    }
}

class Deck{
    constructor(){
        this.cards = [];
        this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        this.strVals = ["King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "Ace"];
        for(var i=0; i<this.suits.length; i++){
            for(var j=0; j<this.strVals.length; j++){
                var card = new Card(this.suits[i], this.strVals[j], 13-j);
                this.cards.push(card);
            }
        }
    }
    shuffle(){
        var currentIndex = this.cards.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
        return; // return this; ?
    }
    reset(){
        this.cards = [];
        //this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        //this.strVals = ["King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "Ace"];
        for(var i=0; i<this.suits.length; i++){
            for(var j=0; j<this.strVals.length; j++){
                var card = new Card(this.suits[i], this.strVals[j], 13-j);
                this.cards.push(card);
            }
        }
        return;
    }
    deal(){
        return this.cards.pop();
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    draw(deck){
        this.hand.push(deck.deal());
        return this;
    }
    discard(){
        this.hand.pop();
        return this;
    }
    playCard(){
        return this.hand.pop();
    }
}

const deck = new Deck();
const akiko = new Player("Akiko");
const keja = new Player("Keja");

//console.log(deck.shuffle().cards);
console.log(deck.shuffle());
//console.log(deck.reset())
console.log(keja.draw(deck).draw(deck).draw(deck).draw(deck).draw(deck).hand);
console.log(keja.discard().hand);
console.log(keja.playCard());