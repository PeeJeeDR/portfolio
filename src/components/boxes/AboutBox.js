import React from 'react';
import { PrimaryTitle } from '../common/PrimaryTitle';
import { LogoOverview } from '../logos/LogoOverview';
import { ProgressBarsOverview } from '../progressbars/ProgressBarsOverview';

export class AboutBox extends React.Component {
    render = () => {
        return (
            <div id='AboutBox'>
                <PrimaryTitle color='light'>
                    What I love!
                </PrimaryTitle>

                <LogoOverview />
                <ProgressBarsOverview />
            </div>
        )
    }
}