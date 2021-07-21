import React from 'react'
import Button from '../Button'
import ChapterBox from '../superDivs/ChapterBox'
import './ContentContainer.css'

function ContentContainer({contentContainer,closeIt,displayedContent,closeAndOpenCCH}) {
    return contentContainer ? <div className="main--content--class">
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <div className="content--container-1">
        <h4>{displayedContent.contentTitle}</h4>
            <div className="titles">
        {displayedContent.chapters.map((item, index) => {
                return (
                    <ChapterBox itemGiven={item} closeAndOpenCCH={closeAndOpenCCH}/>
                )
        })}
        </div>
        </div>
    </div> : null
}

export default ContentContainer
