import React from 'react';
import { BigHeroText } from '../common/BigHeroText';
import { CommonText } from '../common/CommonText';

export class FooterSection extends React.Component {
    render = () => {
        return (
            <div id='FooterSection'>
                <div className="container">
                    <BigHeroText color='light'>#K THANKS BYE</BigHeroText>
                    <div className="contact">
                        <div className='contact_section'>
                            <i class="fas fa-user-alt"></i>
                            <a href="https://www.linkedin.com/in/pieter-jan-de-ridder-991483100/">
                                <CommonText color="light">PIETER-JAN DE RIDDER</CommonText>
                            </a>
                        </div>

                        <div className='contact_section'>
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:contact@pieterjanderidder.be">
                                <CommonText color="light">CONTACT@PIETERJANDERIDDER.BE</CommonText>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}