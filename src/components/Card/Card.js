import React from 'react';
import Swal from 'sweetalert2'
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import './Card.css';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'

export function Card(props) {
    function handleClick (id, title) {
        props.addToCart(id)
        Swal.fire({
            title: 'Item added!',
            text: title + ' was added to the cart',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
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
            <div className="card-buyButton">
                <AwesomeButton onPress={() => {handleClick(props.id, props.title)}} type="primary" size="medium">Add to cart</AwesomeButton>
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
