import React from 'react';
import './cardBack.css';

function CardBack(props){
    return(
        <div onClick={() => props.onClick()} className="card-back-container">
            <h1 className="card-number">???</h1>
        </div>
    )
}

export default CardBack