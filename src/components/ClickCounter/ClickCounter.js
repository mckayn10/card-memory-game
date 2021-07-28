import React, { Component } from 'react';
import './clickCounter.css';

class ClickCounter extends Component {


    render() {

        return (
            <div className="click-counter-container">
                {!this.props.gameOver ? 
                <div>
                    <h1 className="counter-text">Clicks: {this.props.clicks}</h1> 
                    <div className="min-text">(minumum of {this.props.minClicks})</div>
                </div>
                
                : null}
            </div>
        )
    }
}

export default ClickCounter