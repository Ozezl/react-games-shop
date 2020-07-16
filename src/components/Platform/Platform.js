import React from 'react';
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import {connect} from 'react-redux'
import {changePlatform} from '../actions/cartActions'
import './Platform.css';

export function Platform(props) {
    function clickHandler(platform) {
        props.changePlatform(platform)
    }

    return (
        <div className = "platform">
            <AwesomeButton onPress={() =>{clickHandler(props.platform)}} type="secondary" size="large">{props.platform}</AwesomeButton>
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
