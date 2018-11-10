import React from 'react'

export const PrimaryTitle = (props) => {
    return (
        <div id='PrimaryTitle' className={ props.color }>
            { props.children }
        </div>
    );
}