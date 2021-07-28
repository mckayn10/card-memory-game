import React, { Component } from 'react';
import GameCard from '../../components/GameCard/GameCard'
import GameOverView from '../GameOver/GaveOverView'
import ClickCounter from '../../components/ClickCounter/ClickCounter'
import cards from '../../Data/cardData'
import './playGame.css'

class PlayGame extends Component {
    state = {
        currentCardList: [],
        flippedCards: [],
        gameOver: false,
        clicks: 0,
        highScore: 'NA'
    }

    componentDidMount() {
        this.setState({
            currentCardList: this.shuffleArr(cards)
        })
    }

    shuffleArr = (arr) => {
        const cardsList = arr.sort(() => Math.random() - 0.5);

        let newCards = cardsList.map((card, index) => {
            return {
                id: index,
                number: card.number,
                flipped: false,
                matched: false,
                image: card.image
            };
        })
        return newCards
    }

    handleClick = (number, index) => {
        const { currentCardList, flippedCards, clicks } = this.state

        let currentCard = {
            number,
            index
        };

        if(flippedCards.length > 0){
            if(currentCard.index === flippedCards[0].index){
                return false;
            }
        }



        //update card is flipped
        let updateCards = currentCardList.map(card => {
            if (card.id === index) {
                card.flipped = true;
            }
            return card;
        });

        let updateFlipped = flippedCards;
        updateFlipped.push(currentCard);

        this.setState({
            currentCardList: updateCards,
            clicks: clicks + 1
        })

        this.addToFlippedCards(updateFlipped)

    }

    addToFlippedCards = (updateFlipped) => {
        const { flippedCards } = this.state

        this.setState({
            flippedCards: updateFlipped
        }, () => {

            //if 2 cards are flipped, check if they are a match
            if (flippedCards.length === 2) {
                setTimeout(() => {
                    this.check();
                }, 1000);
            }
        })
    }

    check = () => {
        const { currentCardList, flippedCards } = this.state
        let updateCards = currentCardList;

        if (
            flippedCards[0].number === flippedCards[1].number &&
            flippedCards[0].index !== flippedCards[1].index
        ) {
            updateCards[flippedCards[0].index].matched = true;
            updateCards[flippedCards[1].index].matched = true;
            this.isGameOver()
        } else {
            updateCards[flippedCards[0].index].flipped = false;
            updateCards[flippedCards[1].index].flipped = false;
        }

        this.setState({
            currentCardList: updateCards,
            flippedCards: []
        })

    }

    isGameOver = () => {
        let gameIsOver = true;
        this.state.currentCardList.map(card => {
            if (!card.matched) {
                gameIsOver = false
            }
            return null;
        })

        this.setState({
            gameOver: gameIsOver,
        })

        if(gameIsOver){
            this.setState({
                highScore: this.state.clicks
            })
        }
    }

    restart = () => {
        this.setState({
            currentCardList: this.shuffleArr(cards),
            flippedCards: [],
            gameOver: false,
            clicks: 0
        })
    }



    render() {
        const gameCardsList = this.state.currentCardList.map((card, i) => {
            return (
                <GameCard
                    key={i}
                    index={i}
                    number={card.number}
                    matched={card.matched}
                    flipped={card.flipped}
                    clicked={this.state.flippedCards.length === 2 ? () => { } : () => this.handleClick(card.number, i)}
                    image={card.image}
                />
            )
        })

        return (
            <div className='container'>
                <div className="header">
                    <div className="top-header-row">
                        <h1 className='title'>Card Matching Game</h1>
                        <h1 className="score-title title">High Score: {this.state.highScore}</h1>
                    </div>
                    <ClickCounter 
                        clicks={this.state.clicks} 
                        gameOver={this.state.gameOver}
                        minClicks={cards.length}
                    />
                </div>
                {!this.state.gameOver 
                    ? <div className="game-container">
                        {gameCardsList}
                      </div>
                    : <GameOverView 
                        restart={() => this.restart()} 
                        clicks={this.state.clicks}
                      />
                }
            </div>
        )
    }
}

export default PlayGame