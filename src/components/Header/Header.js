import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo'
import Search from '../Search/Search';
import Basket from '../Basket/Basket';

export default function Header() {
    return (
        <div className = "header">
            <Logo/>
            <Search/>
            <Basket/>
        </div>
    )
}

