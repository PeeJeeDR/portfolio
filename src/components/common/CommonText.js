import React from 'react'

export const CommonText = (props) => {
    return (
        <div id='CommonText' className={ props.color }>
            { props.children }
        </div>
    );
}