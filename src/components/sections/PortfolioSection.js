import React from 'react';
import { BigHeroText } from '../common/BigHeroText';
import { ProjectsOverview } from '../projects/ProjectsOverview';

export class PortfolioSection extends React.Component {
    render = () => {
        return (
            <div id='PortfolioSection'>
                <div class='wrapper'>
                    <BigHeroText color='light'>PORTFOLIO</BigHeroText>
                
                    <ProjectsOverview />
                </div>
            </div>
        )
    }
}