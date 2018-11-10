import React from 'react';
import Logo from '../../images/LOGO.png';

export class MainNavigation extends React.Component {
    render = () => {
        return (
            <nav id='MainNavigation'>
                <div className="wrapper">
                    <div className="logo">
                        <img src={ Logo } alt="Logo of Pieter-Jan De Ridder"/>
                    </div>
                    <ul>
                        <li>ABOUT</li>
                        <li>PORTFOLIO</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </nav>
        )
    }
}