import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack';
import './gameCard.css';

class GameCard extends Component {
    state = {
        isFlipped: false,
        matched: false
      };

    // flipCard = () => {
    //     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    // }

    checkMatch = () => {
        this.props.updateCardValues()
        console.log('checking for match')
        if(this.props.firstFlipVal === this.props.number){
            console.log('match!!!!')
            this.setState({
                matched: true
            })
            this.props.resetCardValues()
        } else if (this.props.firstFlipVal !== 0 && this.props.firstFlipVal !== this.props.number){
            console.log('not a match. reflip cards')
            this.props.resetCardValues()
            setTimeout(() => {
                this.props.flipCard()
            }, 1000)
        }
    }
    
    render(){
        return (
            <div className='card-container' onClick={this.checkMatch}>
            <ReactCardFlip isFlipped={this.props.isFlipped} flipDirection="horizontal">
                <CardBack 
                    className="card-front-container"
                    onClick={(e) => this.props.flipCard(this)}
                />
                <CardFront
                    className="card-front-container"
                    number={this.props.number}
                />
            </ReactCardFlip>
            </div>
        )
    }
}

export default GameCard