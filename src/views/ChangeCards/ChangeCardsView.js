import React, { Component } from 'react';
import './changeCardsView.css';

class ChangeCardsView extends Component {


    render() {

        return (
            <div className="change-cards-container">
                <h1 className="game-over-text-lg">Choose a new set of cards</h1>
                <div className="card-set-btn-container">
                    <button onClick={this.props.selectNewCards} className="card-set-btn" value="friends">Friends</button>
                    <button onClick={this.props.selectNewCards} className="card-set-btn" value="numbers">Numbers</button>
                    <button onClick={this.props.selectNewCards} className="card-set-btn" value="animals">Animals</button>
                </div>
            </div>
        )
    }
}

export default ChangeCardsView