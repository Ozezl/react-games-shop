import React from 'react';
import './Content.css';
import Card from '../Card/Card'
import Platform from '../Platform/Platform';
import { connect } from 'react-redux';

export function Content(props) {
    return (
        <div className = "content">
            <div className="content-genre">
                <Platform platform = "PS4"/>
                <Platform platform = "XBOX"/>
                <Platform platform = "SWITCH"/>
                <Platform platform = "ALL"/>
            </div>
            <div className="content-midText">
                Popular
            </div>
            <div className="content-popular">
                {
                    props.items.map(item => {
                       return (<Card key={item.id} id={item.id} title={item.title} platform={item.platform} price={item.price} image={item.image}/>)
                    })
                }
            </div>
        </div>
    )    
}

const mapStateToProps = (state) => {
    return ({
        items: state.items
    })
}

export default connect(mapStateToProps)(Content)