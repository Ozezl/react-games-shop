import React from 'react';
import './Item.css';

export default function Item(props) {
    return (
        <div className='item'>
            <div className="item-image">
                    <img src={props.image} height="278" width="190" alt={props.title}/>
            </div>
            <div className="card-wrapper-description">
                    <span>Title: {props.title}</span>
                    <br/>
                    <span>Platform: {props.platform}</span>
                    <br/>
                    <span>Price: {props.price} dollars</span>
            </div>
        </div>
    )
}