import React from 'react'
import Button from '../Button'
import './ContentContainer.css'

function ContentContainer({contentContainer,closeIt,displayedContent}) {
    return contentContainer ? <div className="main--content--class">
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <div className="content--container">
        <h1>{displayedContent.contentTitle}</h1>
        </div>
    </div> : null
}

export default ContentContainer
