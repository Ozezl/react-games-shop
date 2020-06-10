import React from 'react';
import './Content.css';
import Card from '../Card/Card'
import Header from '../components/Header/Header';

export function Cart() {
    return(
        <div className="cart">
            <Header/>
            <Card/>
        </div>
    )
}