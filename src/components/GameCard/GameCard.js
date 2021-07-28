import React, { Component } from 'react';
import './gameCard.css';

class GameCard extends Component {


    render() {

        return (
            <div 
                className={`${this.props.flipped ? 'flipped-card' : 'flip-card' } ${this.props.matched ? 'matched' : ''}`}
                onClick={this.props.clicked}
            >
                <div className="flip-card-inner">
                    <div className="flip-card-front common-styles">
                        <h1 className="card-text">?</h1>
                    </div>
                    <div className="flip-card-back common-styles">
                        <h1 className="card-text">{this.props.number}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameCard