import React from 'react';
import { Line } from 'rc-progress';
import { CommonText } from '../common/CommonText';

export const SingleBar = (props) => {
    return (
        <div id='SingleBar'>
            <CommonText color='light'>{ props.name }</CommonText>
            <div className='bar_container'>
                <div className="line"></div>
                <div className="bar">
                    <Line 
                        percent={ props.percent } 
                        strokeColor="#F3B61F" 
                        strokeLinecap='butt' 
                        trailColor='#000'
                    />
                </div>
                <div className="line"></div>
            </div>
        </div>
    );
}