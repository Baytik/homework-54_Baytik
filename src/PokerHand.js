class PokerHand {
    constructor(cards) {
        this.cards = cards;
        console.log(this.cards)
    }

    getOutcome() {
        let countRank = 0;
        let countSuits = 0;
        for (let i = 0; i < this.cards.length; i++) {
            for (let j = i + 1; j < this.cards.length; j++) {
             if (this.cards[i].rank === this.cards[j].rank) {
                 countRank++;
              }
             if (this.cards[i].suit === this.cards[j].suit) {
                 countSuits++;
             }
            }
        }

        if (countRank === 1) {
            console.log('one pair')
        }
        if (countRank === 2) {
            console.log('two pairs')
        }
        if (countRank === 3) {
            console.log('three of a kind')
        }
        if (countSuits === 5) {
            console.log('flush')
        }
    }
}

export default PokerHand;