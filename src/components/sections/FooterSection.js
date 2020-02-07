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
                            <i className="fas fa-user-alt"></i>
                            <a target="_blank" href="https://www.linkedin.com/in/pieter-jan-de-ridder-991483100/">
                                <CommonText color="light">PIETER-JAN DE RIDDER</CommonText>
                            </a>
                        </div>

                        <div className='contact_section'>
                            <i className="fas fa-envelope"></i>
                            <a target="_blank" href="mailto:contact@pieterjanderidder.be">
                                <CommonText color="light">CONTACT@PIETERJANDERIDDER.BE</CommonText>
                            </a>
                        </div>
                    </div>

                    <div className="git">
                        <a target="_blank" href="https://github.com/PeeJeeDR/Portfolio">
                            <i className="fab fa-github"></i>
                            <CommonText color="light">
                                Find me on GitHub.
                            </CommonText>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}