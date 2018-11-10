import React from 'react';
import { PrimaryTitle } from '../common/PrimaryTitle';
import { SingleBar } from './SingleBar';

export class ProgressBarsOverview extends React.Component {
    render = () => {
        return (
            <div id='ProgressBarsOverview'>
                <PrimaryTitle color='light'>
                    But that's not all! ;-)
                </PrimaryTitle>

                <SingleBar percent={20}/>
            </div>
        )
    }
}