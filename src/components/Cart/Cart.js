import React from 'react';
import { connect } from 'react-redux'
import './Cart.css';
import Item from '../Item/Item'

export function Cart(props) {
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
                            <Item key={item.id} image={item.image} title={item.title} platform={item.platform} price={item.price}/> 
                        )
                    })
                    :
                    (<span>
                        Nothing is here
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