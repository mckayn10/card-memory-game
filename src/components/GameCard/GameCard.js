import React, { Component } from 'react';
import './gameCard.css';

class GameCard extends Component {


    render() {

        console.log(this.props.flipped)
        return (
            <div 
                className={`${this.props.flipped ? 'flipped-card' : 'flip-card'} ${this.props.matched ? 'matched' : ''}`}
                onClick={this.props.clicked}
            >
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1>{this.props.number}</h1>
                    </div>
                    <div className="flip-card-back">
                        <h1>{this.props.number}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameCard