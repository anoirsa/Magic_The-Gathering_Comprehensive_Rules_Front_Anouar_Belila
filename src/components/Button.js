import React from 'react'
import './Button.css';

function Button({chosenStyle,textGiven,isIconThere,icon,chosenSize,clickMe}) {

    const STYLES = ['btn--outline','btn--primary','btn--search']
    const SIZES = ['btn--small','btn--large']
    const inputStyle  = STYLES.includes(chosenStyle) ? chosenStyle : STYLES[0];
    const inputSize = SIZES.includes(chosenSize) ? chosenSize : SIZES[0];

    return (
        <div className={`btns ${inputStyle} ${inputSize}`}
            onClick = {() => clickMe()}
            >
            <h5>{textGiven}</h5>
            {isIconThere && <i className={icon} />}
        </div>
    )
}

export default Button
