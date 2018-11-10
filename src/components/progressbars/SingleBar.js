import React from 'react';
import { Line } from 'rc-progress';

export const SingleBar = (props) => {
    return (
        <div id='SingleBar'>
            <div className="line"></div>
            <div className="bar">
                <Line 
                    percent={ props.percent } 
                    strokeWidth="1" 
                    strokeColor="#F3B61F" 
                    strokeLinecap='butt' 
                    trailColor='#000'
                />
            </div>
            <div className="line"></div>
        </div>
    );
}