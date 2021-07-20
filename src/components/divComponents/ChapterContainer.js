import React from 'react'
import Button from '../Button'
import './ChapterContainer.css'

function ChapterContainer({chapterContainer,closeIt,displayedContent}) {
    return chapterContainer ? <div className="main--chapter--class">
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <div className="chapter--container">

            {displayedContent}
        </div>
    </div> : null
}

export default ChapterContainer
