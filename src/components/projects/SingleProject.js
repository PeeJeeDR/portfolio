import React from 'react';
import { CommonText } from '../common/CommonText';

export const SingleProject = (props) => {
    return (
        <div id='SingleProject'>
            <div className="img_container">
                <img src={ props.project.img } alt={ props.project.img_alt }/>
                <div className="overlay"></div>
                <div className="overlay_text">
                    <CommonText color='light'>{ props.project.done.toUpperCase() }</CommonText>
                    <CommonText color='medium light second'>{ props.project.description }</CommonText>
                </div>
                <div className="description">
                    <div>
                        <CommonText color='light'>{ props.project.name }</CommonText>
                    </div>
                    <div className='icons'>
                        <a href=""><i className="fab fa-facebook-f"></i></a>
                        <a href={ props.project.url }><i class="fas fa-link"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}