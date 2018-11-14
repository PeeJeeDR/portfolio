import React from 'react';
import { PrimaryTitle } from '../common/PrimaryTitle';
import { SingleBar } from './SingleBar';

export class ProgressBarsOverview extends React.Component {
    render = () => {
        return (
            <div id='ProgressBarsOverview'>
                <PrimaryTitle color='light'>
                    But that's not all!
                </PrimaryTitle>

                <SingleBar percent={92} name='React'/>
                <SingleBar percent={84} name='Vue'/>
                <SingleBar percent={86} name='React Native'/>
                <SingleBar percent={79} name='Laravel'/>
                <SingleBar percent={86} name='Adobe XD'/>
                <SingleBar percent={76} name='Wordpress'/>
                <SingleBar percent={80} name='Adobe After Effects'/>
                <SingleBar percent={83} name='Git'/>
                <SingleBar percent={10} name='Angular, not my cup of tea tbh :-)'/>
            </div>
        )
    }
}