import React, { Component } from 'react';
import GameCard from '../../components/GameCard/GameCard'
import cards from '../../Data/cardData'
import './playGame.css'

class PlayGame extends Component {
    state = {
        currentCardList: [],
        flippedCards: [],
        matchedNumbers: [],
    }

    componentDidMount(){
        this.setState({
            currentCardList: this.shuffleArr(cards)
        })
    }

    shuffleArr(arr) {
        const cardsList = arr.sort(() => Math.random() - 0.5);
    
        let newCards = cardsList.map((card, index) => {
            return {
                id: index,
                number: card.number,
                flipped: false,
                matched: false
              };
        })
        return newCards
    }

    handleClick = (number, index) => {
        const {currentCardList, flippedCards} = this.state

        let currentCard = {
            number,
            index
        };

        //update card is flipped
        let updateCards = currentCardList.map(card => {
            if (card.id === index) {
                card.flipped = true;
            }
            return card;
        });


        console.log('first update', updateCards)


        let updateFlipped = flippedCards;
        updateFlipped.push(currentCard);

        this.setState({
            currentCardList: updateCards
        })
        this.addToFlippedCards(updateFlipped)


    }

    addToFlippedCards(updateFlipped) {
        const {currentCardList, flippedCards} = this.state

        this.setState({
            flippedCards: updateFlipped
        }, () => {

            //if 2 cards are flipped, check if they are a match
            if (flippedCards.length === 2) {
                setTimeout(() => {
                    this.check();
                }, 750);
            }
        })
    }

    check = () => {
        const {currentCardList, flippedCards} = this.state
        let updateCards = currentCardList;

        if (
          flippedCards[0].number === flippedCards[1].number &&
          flippedCards[0].index !== flippedCards[1].index
        ) {
          updateCards[flippedCards[0].index].matched = true;
          updateCards[flippedCards[1].index].matched = true;
        } else {
          updateCards[flippedCards[0].index].flipped = false;
          updateCards[flippedCards[1].index].flipped = false;
        }


        this.setState({
            currentCardList: updateCards,
            flippedCards: []
        })

    }

    render() {
        console.log('staaaaate',this.state.currentCardList)

        const gameCardsList = this.state.currentCardList.map((card, i) => {
            return (
                <GameCard
                    key={i}
                    index={i}
                    number={card.number}
                    matched={card.matched}
                    flipped={card.flipped}
                    clicked={this.state.flippedCards.length === 2 ? () => { } : () => this.handleClick(card.number, i)}
                />
            )
        })

        return (
            <div className='container'>
                <div className="header">
                    <h1 className='title'>CARD MATCHING GAME</h1>
                    <h3 className="timer">Timer</h3>
                </div>
                <div className="game-container">
                    {gameCardsList}
                </div>
            </div>
        )
    }
}

export default PlayGame