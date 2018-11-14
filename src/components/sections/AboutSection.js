import React from 'react';
import { BigHeroText } from '../common/BigHeroText';
import { CommonText } from '../common/CommonText';
import { AboutBox } from '../boxes/AboutBox';

export class AboutSection extends React.Component {
    render = () => {
        return (
            <div id='AboutSection'>
                <div className='container'>
                    <BigHeroText color='dark'>ABOUT</BigHeroText>
                
                    <div className='me'>
                        <CommonText>
                            Mijn naam is Pieter-Jan De Ridder, student Multimedia Technologie <br/>
                            aan de Karel de Grote Hogeschool en een gepassioneerd <br/>
                            web front end developer!
                        </CommonText>

                        <a href="https://www.linkedin.com/in/pieter-jan-de-ridder-991483100/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                
                    <AboutBox />
                </div>
            </div>
        )
    }
}