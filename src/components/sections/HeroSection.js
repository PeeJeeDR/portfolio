import React from 'react';
import { MainNavigation } from '../navigations/MainNavigation';
import Profile from '../../images/PROFILE_1.png';
import { PrimaryTitle } from '../common/PrimaryTitle';
import { SubTitle } from '../common/SubTitle';
import Logo from '../../images/LOGO.png';

export class HeroSection extends React.Component {
    render = () => {
        return (
            <div id='HeroSection'>
                <div className="container">
                    <MainNavigation />

                    <div className='profile'>
                        <img src={ Profile } alt="Portret of Pieter-Jan De Ridder." className="profile_img"/>
                        <img src={ Logo } alt="Logo of Pieter-Jan De Ridder" className="logo_img"/>
                        <div className='title'>
                            <PrimaryTitle color='light'>
                                Hi! I'm Pieter-Jan
                            </PrimaryTitle>

                            <SubTitle>
                                Front-end Web Developer / Designer
                            </SubTitle>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}