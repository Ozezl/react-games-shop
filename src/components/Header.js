import React from 'react';
import './Header.css';
import Logo from './Logo'
import Search from './Search';
import Basket from './Basket';

export default function Header() {
    return (
        <div className = "header">
            <Logo/>
            <Search/>
            <Basket/>
        </div>
    )
}

