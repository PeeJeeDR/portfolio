import React from 'react'

export const BigHeroText = (props) => {
    return (
        <div id='BigHeroText' className={ props.color }>
            { props.children }
        </div>
    );
}