import React, { useState } from 'react';
import './Search.css';

export default function Search() {
    const [input, setInput] = useState('');

    function changeHandler(e) {
        setInput(e.target.value)
        console.log(input)
    }

    return (
        <div className="search">
            <form>
                <input type="search" id="search-input" onChange={changeHandler}/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )    
}