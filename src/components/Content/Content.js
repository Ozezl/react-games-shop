import React from 'react';
import './Content.css';
import Card from '../Card/Card'
import Platform from '../Platform/Platform';

export default function Content() {
    return (
        <div className = "content">
            <div className="content-genre">
                <Platform platform = "PS4"/>
                <Platform platform = "XBOX"/>
                <Platform platform = "SWITCH"/>
            </div>
            <div className="content-midText">
                Popular
            </div>
            <div className="content-popular">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )    
}