import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import Logo from '../Logo/Logo'
import Search from '../Search/Search';
import Basket from '../Basket/Basket';

export default function Header() {
    return (
        <div className = "header">
            <Link to="/"><Logo/></Link>
            <Search/>
           <Link to="/cart"><Basket/></Link>
        </div>
    )
}

