import React from 'react';
import './Card.css';
import {connect} from 'react-redux'
import {addToCart} from '../actions/cartActions'

export function Card(props) {
    function handleClick (id, title) {
        props.addToCart(id)
        alert(title + ' is added to the Cart')
    }

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
            <div className="card-buyButton" onClick={() => {handleClick(props.id, props.title)}}>
                <span>Add to cart</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        items: state.items
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
