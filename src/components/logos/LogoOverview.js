import React from 'react'
import ReactLogo from '../../images/icons/REACT_LOGO.png';
import VueLogo from '../../images/icons/VUE_LOGO.png';

export const LogoOverview = (props) => {
    return (
        <div id='LogoOverview'>
            <img src={ ReactLogo } alt="React logo."/>
            <img src={ VueLogo } alt="Vue logo."/>
        </div>
    );
}