import React from 'react'
import Button from '../Button'
import './WordContainer.css'

function WordContainerF({wordContainer,closeIt}) {
    return wordContainer ? <div className="main--word--class">
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <div className="word--container">

        </div>
    </div> : null
}

export default WordContainerF
