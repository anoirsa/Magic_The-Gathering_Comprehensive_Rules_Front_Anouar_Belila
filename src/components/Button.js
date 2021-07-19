import React from 'react'
import './Button.css';

function Button({chosenStyle,textGiven,isIconThere,icon}) {

    const STYLES = ['btn--outline','btn--primary']
    const inputStyle  = STYLES.includes(chosenStyle) ? chosenStyle : STYLES[0];
    return (
        <div className={`btns ${inputStyle}`}>
            <h3>{textGiven}</h3>
            {isIconThere && <i className={icon} />}
        </div>
    )
}

export default Button
