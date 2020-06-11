import React, { useState } from 'react';
import './Card.css';
import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions'

export function Card(props) {
    const [show, setShow] = useState(true);

    function handleClick (id) {
        props.addToCart(id)
        alert('Item is added to the Cart')
    }

    function handleBoxToggle() {
        setShow(!show)
    }

    if(show){
    return (
        <div className = "card">
            <div className="card-wrapper">
                <div className="card-wrapper-image">
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
            <div className="card-buyButton" onClick={() => {handleClick(props.id)}}>
                <span>Add to cart</span>
            </div>
        </div>
    )}
    else{
    return (
        <div className = "card">
            <div className="card-image">
                <img src={props.image} height="278" width="190" alt={props.title} onMouseOver={() => {handleBoxToggle()}}/>
            </div>
            <div className="card-buyButton" onClick={() => {handleClick(props.id)}}>
                <span>Add to cart</span>
            </div>
        </div>
    )}
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    })
}

export default connect(null, mapDispatchToProps)(Card)
