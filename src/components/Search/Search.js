import React, { useState } from 'react';
import {connect} from 'react-redux'
import {filterItems} from '../actions/cartActions'
import './Search.css';

export function Search(props) {
    const [input, setInput] = useState('');

    function filterHandler(title) {
        props.filterItems(title)
    }

    function changeHandler(e) {
        setInput(e.target.value)
        filterHandler(e.target.value)
    }

    return (
        <div className="search">
            <form>
                <input type="search" id="search-input" placeholder="Search..." onChange={changeHandler}/>
            </form>
        </div>
    )    
}

const mapDispatchToProps = (dispatch) => {
    return ({
        filterItems: (title) => {
            dispatch(filterItems(title))
        }
    })
}

export default connect(null, mapDispatchToProps)(Search)
