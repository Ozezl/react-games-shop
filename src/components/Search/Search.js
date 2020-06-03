import React from 'react';
import './Search.css';

export default function Search() {
    return (
        <div className="search">
            <form>
                <input type="search" id="search-input"/>
                <input type="submit" value="Search"/>
            </form>
        </div>
    )    
}