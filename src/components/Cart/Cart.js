import React, { useReducer } from 'react';
import { connect } from 'react-redux'
import './Cart.css';
import Item from '../Item/Item'

export function Cart(props) {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    function handleClick() {
        forceUpdate()
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
                        {props.total}
                    </span>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        items: state.addedItems
    })
}

export default connect(mapStateToProps)(Cart)