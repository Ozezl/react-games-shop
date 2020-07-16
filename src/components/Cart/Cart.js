import React, { useReducer } from 'react';
import { connect } from 'react-redux'
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import './Cart.css';
import Item from '../Item/Item'

export function Cart(props) {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    function handleClick() {
        forceUpdate()
    }  

    function handleButton() {
        alert('Placeholder');
    }

    return(
        <div className="cart">
            <div className="cart-description">
                You have ordered:
            </div>
            <div className="cart-items">
                {
                    props.items !== undefined && props.items.length > 0?
                    props.items.map(item => {
                        return (
                            <Item key={item.id} id={item.id} image={item.image} title={item.title} platform={item.platform} price={item.price} quantity={item.quantity} update={() => {handleClick()}}/>
                        )
                    })
                    :
                    (<span>
                        Nothing is here
                    </span>)

                }
            </div>
            <div className="cart-total">
                <div>
                    The total amount is: {props.total} dollars
                </div>
                <AwesomeButton onPress={() => {handleButton()}} type="primary" size="medium">Pay now</AwesomeButton>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        items: state.addedItems,
        total: state.total
    })
}

export default connect(mapStateToProps)(Cart)