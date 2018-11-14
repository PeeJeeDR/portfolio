import React from 'react';
import { CommonText } from '../common/CommonText';

export class SingleProject extends React.Component {
    renderFacebook = () => {

        console.log(this.props.project.facebook_url);
        if (this.props.project.facebook_url) 
        {
            return (
                <a href={ this.props.project.facebook_url }>
                    <i className="fab fa-facebook-f"></i>
                </a>
            )
        }
    }
    
    render = () => {
        return (
            <div id='SingleProject'>
                <div className="img_container">
                    <img src={ this.props.project.img } alt={ this.props.project.img_alt }/>
                    <div className="overlay"></div>
                    <div className="overlay_text">
                        <CommonText color='light'>{ this.props.project.done.toUpperCase() }</CommonText>
                        <CommonText color='medium light second'>{ this.props.project.description }</CommonText>
                    </div>
                    <div className="description">
                        <div>
                            <CommonText color='light'>{ this.props.project.name }</CommonText>
                        </div>
                        <div className='icons'>
                            { this.renderFacebook() }
                            <a href={ this.props.project.url }><i className="fas fa-link"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}