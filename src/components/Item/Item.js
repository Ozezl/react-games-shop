import React from 'react';
import { connect } from 'react-redux'
import { removeItem, addItem, subtractItem } from '../actions/cartActions'
import './Item.css';

export function Item(props) {
    function handleClick() {
        props.update()
    }  

    function handleRemove(id) {
        props.removeItem(id)
    }

    function handleAddition(id) {
        props.addItem(id)
    }

    function handleDecrement(id) {
        props.subtractItem(id)
    }

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
                        <button onClick={() => {handleDecrement(props.id);  handleClick()}}>-</button>
                        <input type="number" min="1" max="999" placeholder={props.quantity} readOnly="readOnly"/>
                        <button onClick={() => {handleAddition(props.id); handleClick()}}>+</button>
                    </div>
                    <div className="item-innerWrapper-removeButton">
                        <button onClick={() => {handleRemove(props.id)}}>Remove</button>
                    </div>
                    <div className="item-innerWrapper-itemPrice">
                        Price: {props.price * props.quantity} dollars
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return ({
        removeItem: (id) => {dispatch(removeItem(id))},
        addItem: (id) => {dispatch(addItem(id))},
        subtractItem: (id) => {dispatch(subtractItem(id))}
    })
}

export default connect(null, mapDispatchToProps)(Item)