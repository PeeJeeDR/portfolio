import React from 'react';
import { MainNavigation } from '../navigations/MainNavigation';
import Profile from '../../images/PROFILE.png';

export class HeroSection extends React.Component {
    render = () => {
        return (
            <div id='HeroSection'>
                <div className="wrapper">
                    <MainNavigation />

                    <div className='profile'>
                        <img src={ Profile } alt="Myself"/>
                    </div>
                </div>
            </div>
        )
    }
}