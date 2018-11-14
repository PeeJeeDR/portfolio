import React from 'react';
import Logo from '../../images/LOGO.png';
import { Link } from 'react-scroll';

export class MainNavigation extends React.Component {
    render = () => {
        return (
            <nav id='MainNavigation'>
                <div className="logo">
                    <img src={ Logo } alt="Logo of Pieter-Jan De Ridder"/>
                </div>
                <ul>
                    <li>
                        <Link to='AboutSection' spy={ scrollOpt.spy } offset={ scrollOpt.offset } smooth={ scrollOpt.smooth }>ABOUT</Link>
                    </li>
                    <li>
                        <Link to='PortfolioSection' spy={ scrollOpt.spy } offset={ scrollOpt.offset } smooth={ scrollOpt.smooth }>PORTFOLIO</Link>
                    </li>
                    <li>
                        <Link to='FooterSection' spy={ scrollOpt.spy } offset={ scrollOpt.offset } smooth={ scrollOpt.smooth }>CONTACT</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

const scrollOpt = {
    spy: true,
    offset: 0,
    smooth: true,

    noOffset: {
        offset: 0,
    }
}