import React from 'react';
import { BigHeroText } from '../common/BigHeroText';
import { PrimaryTitle } from '../common/PrimaryTitle';
import { LogoOverview } from '../logos/LogoOverview';
import { CommonText } from '../common/CommonText';
import { AboutBox } from '../boxes/AboutBox';

export class AboutSection extends React.Component {
    render = () => {
        return (
            <div id='AboutSection'>
                <div class='section_text'>
                    <BigHeroText>A</BigHeroText>
                    <BigHeroText>B</BigHeroText>
                    <BigHeroText>O</BigHeroText>
                    <BigHeroText>U</BigHeroText>
                    <BigHeroText>T</BigHeroText>
                </div>

                <div className='me wrapper'>
                    <CommonText>
                        Mijn naam is Pieter-Jan De Ridder, student Multimedia Technologie <br/>
                        aan de Karel de Grote Hogeschool en een gepassioneerd <br/>
                        web front end developer!
                    </CommonText>
                </div>

                <AboutBox />
            </div>
        )
    }
}