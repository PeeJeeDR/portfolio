import React from 'react';
import { MainNavigation } from '../navigations/MainNavigation';
import Profile from '../../images/PROFILE_1.png';
import { PrimaryTitle } from '../common/PrimaryTitle';
import { SubTitle } from '../common/SubTitle';

export class HeroSection extends React.Component {
    render = () => {
        return (
            <div id='HeroSection'>
                <div className="wrapper">
                    <MainNavigation />

                    <div className='profile'>
                        <img src={ Profile } alt="Myself"/>
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