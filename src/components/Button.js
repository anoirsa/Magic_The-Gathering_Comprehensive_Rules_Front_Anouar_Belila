import React from 'react'
import './Button.css';

function Button({chosenStyle,textGiven,isIconThere,icon,chosenSize}) {

    const STYLES = ['btn--outline','btn--primary']
    const SIZES = ['btn--small','btn--large']
    const inputStyle  = STYLES.includes(chosenStyle) ? chosenStyle : STYLES[0];
    const inputSize = SIZES.includes(chosenSize) ? chosenSize : SIZES[0];

    return (
        <div className={`btns ${inputStyle} ${inputSize}`}>
            <h3>{textGiven}</h3>
            {isIconThere && <i className={icon} />}
        </div>
    )
}

export default Button
