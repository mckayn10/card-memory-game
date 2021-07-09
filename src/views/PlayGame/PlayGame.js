import React, {Component} from 'react';
import GameCard from '../../components/GameCard/GameCard'
import cards from '../../Data/cardData'
import './playGame.css'

class PlayGame extends Component {
    state = {
        firstFlipValue: 0,
        firstFlipIndex: false,
        currentCardList: cards,
        selectedCards: [],
        isFlipped: false
    }

    componentDidMount(){
        this.shuffleArr()
    }

    updateCardValues = (number, index) => {
        if (this.state.firstFlipValue === 0){
            this.setState({
                firstFlipValue: number,
                firstFlipIndex: index
            })
        }
    }

    updateSelectedCards = (index) => {
        this.setState(prevState => ({
            selectedCards: [...prevState.selectedCards, index]
        }))

    }

    resetCardValues = () => {
        this.setState({
            firstFlipValue: 0,
        })
    }

    shuffleArr() {
        const cardsList = this.state.currentCardList.sort(() => Math.random() - 0.5);
        this.setState({
            currentCardList: cardsList
        })
    }

    flipCard = (f) => {
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    flipCards = (gameCards) => {
        console.log('game cards', gameCards)
        gameCards.map(element => {
            console.log(element.key)
            if(element.key == 0){
                console.log('flip')
                this.flipCard()
            }
        });
    }

    render(){

        const gameCardsList = this.state.currentCardList.map((card, i) => {
            return (
                <GameCard 
                    key={i}
                    index={i}
                    number={card.number}
                    updateCardValues={() => this.updateCardValues(card.number, i)}
                    updateSelectedCards={() => this.updateSelectedCards(i)}
                    resetCardValues={() => this.resetCardValues()}
                    firstFlipVal={this.state.firstFlipValue}
                    firstFlipIndex= {this.state.firstFlipIndex}
                    selectedCards={this.state.selectedCards}
                    isFlipped={this.state.isFlipped}
                    flipCard={() => this.flipCard()}
                />
            )
        })

        return (
            <div className='container'>
                <div className="header">
                    <h1 className='title'>CARD MATCHING GAME</h1>
                    <h3 className="timer">Timer</h3>
                    <button onClick={() => this.flipCards(gameCardsList)}>FLIP ALL CARDS</button>
                </div>
                <div className="game-container">
                    {gameCardsList}
                </div>
            </div>
        )
    }
}

export default PlayGame