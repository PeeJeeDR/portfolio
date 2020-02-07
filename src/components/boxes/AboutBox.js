import React from 'react';
import { PrimaryTitle } from '../common/PrimaryTitle';
import { LogoOverview } from '../logos/LogoOverview';

export class AboutBox extends React.Component {

    render = () => {
        return (
            <div id='AboutBox'>
                <PrimaryTitle color='light'>
                    Tech Stack
                </PrimaryTitle>

                <LogoOverview />
            </div>
        )
    }
}