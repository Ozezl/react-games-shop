import React from 'react';
import {connect} from 'react-redux'
import {changePlatform} from '../actions/cartActions'
import './Platform.css';

export function Platform(props) {
    function clickHandler(platform) {
        props.changePlatform(platform)
    }

    return (
        <div className = "platform" onClick = {() =>{clickHandler(props.platform)}}>
            {props.platform}
        </div>
    )    
}

const mapDispatchToProps = (dispatch) => {
    return ({
        changePlatform: (platform) => {
            dispatch(changePlatform(platform))
        }
    })
}

export default connect(null, mapDispatchToProps)(Platform)
