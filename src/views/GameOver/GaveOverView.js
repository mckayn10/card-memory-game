import React, { Component } from 'react';
import './gameOver.css';

class GameOverView extends Component {


    render() {

        return (
            <div className="game-over-container">
                <h1 className="game-over-text-lg">GAME OVER</h1>
                <h3 className="game-over-text">You finished the game in {this.props.clicks} clicks!</h3>
                <h3 className="game-over-text">Can you do better?</h3>
                <button onClick={this.props.restart} className="play-again-btn">Play Again</button>
            </div>
        )
    }
}

export default GameOverView