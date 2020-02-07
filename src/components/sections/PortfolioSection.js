import React from 'react';
import { BigHeroText } from '../common/BigHeroText';
import { ProjectsOverview } from '../projects/ProjectsOverview';
import { CommonText } from '../common/CommonText';

export class PortfolioSection extends React.Component {
    render = () => {
        return (
            <div id='PortfolioSection'>
                <div className='container'>
                    <BigHeroText color='dark'>PORTFOLIO</BigHeroText>
                    <CommonText>
                        Some projects I've made.
                    </CommonText>
                
                    <ProjectsOverview />
                </div>
            </div>
        )
    }
}