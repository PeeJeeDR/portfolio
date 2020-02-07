import React from 'react'
import ReactLogo from '../../images/icons/REACT_LOGO.png';
import VueLogo from '../../images/icons/VUE_LOGO.png';
import JSLogo from '../../images/icons/JS_LOGO.png';
import TSLogo from '../../images/icons/TS_LOGO.png';
import SASSLogo from '../../images/icons/SASS_LOGO.png';
import PhaserLOGO from '../../images/icons/PHASER_LOGO.png';
import GithubLogo from '../../images/icons/GITHUB_LOGO.png';
import FirebaseLogo from '../../images/icons/FIREBASE_LOGO.png';
import NodeLogo from '../../images/icons/NODE_LOGO.png';

export const LogoOverview = () => {
    return (
        <div id='LogoOverview'>
            <img src={ ReactLogo } alt="React logo."/>
            <img src={ VueLogo } alt="Vue logo."/>
            <img src={ JSLogo } alt="JS logo."/>
            <img src={ TSLogo } alt="TS logo."/>
            <img src={ SASSLogo } alt="SASS logo."/>
            <img src={ GithubLogo } alt="Github logo."/>
            <img src={ NodeLogo } alt="Node logo."/>
            <img src={ FirebaseLogo } alt="Firebase logo."/>
            <img src={ PhaserLOGO } alt="Phaser logo."/>
        </div>
    );
}