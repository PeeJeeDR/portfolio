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
                            <p>Front-developer @ Intracto</p>
                            <p>Studied Multimedia Technology @ KdG Hoboken</p>
                            <p>Love wildlife / nature photography</p>
                            <p>And ofcourse... web development obviously!</p>
                        </CommonText>

                        <a target="_blank" href="https://www.linkedin.com/in/pieter-jan-de-ridder-991483100/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>

                        <a target="_blank" href="https://www.instagram.com/pieterjan.deridder/">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                
                    <AboutBox />
                </div>
            </div>
        )
    }
}