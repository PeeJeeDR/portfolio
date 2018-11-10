import React from 'react';
import { BigHeroText } from '../common/BigHeroText';
import { PrimaryTitle } from '../common/PrimaryTitle';
import { LogoOverview } from '../logos/LogoOverview';
import { CommonText } from '../common/CommonText';

export class AboutSection extends React.Component {
    render = () => {
        return (
            <div id='AboutSection'>
                <div className='content_container'>
                    <div>
                        <BigHeroText>
                            ABO
                        </BigHeroText>

                        <BigHeroText>
                            UT
                        </BigHeroText>
                    </div>

                    <div className='love'>
                        <PrimaryTitle color='dark'>
                            What i love!
                        </PrimaryTitle>

                        <LogoOverview />
                    </div>
                </div>

                <div className='me wrapper'>
                    <PrimaryTitle color='dark'>
                        Me
                    </PrimaryTitle>
                    <CommonText>
                        Mijn naam is Pieter-Jan De Ridder, student Multimedia Technologie <br/>
                        aan de Karel de Grote Hogeschool en een gepassioneerd <br/>
                        web front end developer!
                    </CommonText>
                </div>
            </div>
        )
    }
}