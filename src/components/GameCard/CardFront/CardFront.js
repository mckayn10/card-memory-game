import React from 'react';
import './cardFront.css';

function CardFront(props){
    return (
        <div onClick={props.onClick} className="card-front-container">
            <h1 className="card-number">{props.number}</h1>
        </div>
    )
}

export default CardFront