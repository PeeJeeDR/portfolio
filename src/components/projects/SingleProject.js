import React from 'react';
import { PrimaryTitle } from '../common/PrimaryTitle';
import { CommonText } from '../common/CommonText';
import { ProjectsOverview } from './ProjectsOverview';

export const SingleProject = (props) => {
    return (
        <div id='SingleProject'>
            <div className="img_container">
                <img src={ props.project.img } alt={ props.project.img_alt }/>
                <div className="overlay"></div>
                <div className="overlay_text">
                    <CommonText color='light'>WEBSITE</CommonText>
                    <CommonText color='medium second'>{ props.project.description }</CommonText>
                </div>
                <div className="description">
                    <div>
                        <CommonText color='light'>{ props.project.name }</CommonText>
                    </div>
                    <div className='icons'>
                        <i className="fab fa-facebook-f"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}