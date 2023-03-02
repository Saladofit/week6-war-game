//card class
class card{
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}
//Deck class with suit and value 
class Deck{
    constructor() {
        this.Deck = [];
        const value = ['2', '3', '4', '5', '6', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const suit = ['Club', 'Diamonds', 'Hearts', 'Spades'];
        for(let value of values ) {
        for(let suit of suits) {
            this.Deck.push(new card (values[value], suits[suit]));
        }
        }
        this.shuffel();
    }
    //shuffel and loop to iterat through deck
    shuffel(){
        for(let i = 0; i<this.Deck.length; i++){
            let temp = this.Deck[i];
            let swapedindex = Math.floor(Math.randoma() * this.Deck.length);
            this.Deck[i] = this.Deck[swapedindex];
            this.Deck[swapedindex] = temp;
        }
    }
    //draw card from deck
    draw(){
        return this.Deck.pop();
    }
    addCard(card){
        this.Deck.unshift(card);
        this.shuffel();
    }
} 
//player class and points
    class player {
        constructor(name){
            this.name = name;
            this.hand = [];
            this.point = 0;
        }
        drawCard(){
            let card = Deck.draw();
            this.hand.push(card);
        }
        discardCard(){
            return this.hand.pop();
        }
        playCard(){
            let card = this.discardCard();
            return card;
        }
        addpoints(points){
            this.points+=points;
        }
    }
    // function to determine the winner  
        function gameWinner(p1,p2){
            if(p1.points > p2.points){
                console.log( '$ {p1.name} won the game with total ${p1.point}')
            }else if (p2 < p1){
                console.log('${p2.name} won the game with total ${p2.points}')
            }
        }
