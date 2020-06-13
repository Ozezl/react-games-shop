import React from 'react';
import './Item.css';

export default function Item(props) {
    return (
        <div className="item-outerWrapper">
            <hr/>
            <div className="item">
                <div className="item-image">
                        <img src={props.image} height="278" width="190" alt={props.title}/>
                </div>
                <div className="item-innerWrapper">
                    <div className="item-innerWrapper-upperText">
                        Description
                    </div>
                    <div className="item-innerWrapper-description">
                            <span>Title: {props.title}</span>
                            <br/>
                            <span>Platform: {props.platform}</span>
                    </div>
                    <div className="item-innerWrapper-counter">
                        <label>Amount</label>
                        <br/>
                        <input type="number" min="1" max="999" placeholder='1' onKeyDown="return false"/>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}