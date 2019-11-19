import React, {Component} from 'react';
import './App.css';
import './cards/cards.css';
import Card from "./components/card";
import CardDeck from './CardDeck';
import PokerHand from "./PokerHand";

class App extends Component {
    constructor(props) {
        super(props);
        this.deck = new CardDeck();
    }

    state = {
        cards: []
    };

    changeCards = async () => {
        if (this.deck.deck.length < 5) {
            alert('cards are over!');
        } else {
            const cards = this.deck.getCards(5);
            await this.setState({cards});
            const poker = new PokerHand(this.state.cards);
            poker.getOutcome();
        }
    };

    render() {
        return (
            <div className='myCard'>
                <button onClick={this.changeCards} className="btn-1">Shuffle cards</button>
                <div className="playingCards faceImages">
                    {this.state.cards.map(card => {
                        return (
                            <Card suit = {card.suit} rank = {card.rank}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;