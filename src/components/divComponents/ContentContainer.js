import React from 'react'
import Button from '../Button'
import ChapterBox from '../superDivs/ChapterBox'
import './ContentContainer.css'

function ContentContainer({contentContainer, closeIt, displayedContent, closeAndOpenCCH, nextContent, previousContent}) {
    return contentContainer ? <div className="main--content--class">
        <div className="buttonContainer">
        <Button chosenStyle="btn--outline" textGiven="PREVIOUS CONTENT"  chosenSize="btn--small" clickMe={previousContent}/>
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <Button chosenStyle="btn--outline" textGiven="NEXT CONTENT"  chosenSize="btn--small" clickMe={nextContent}/>
        </div>
        <div className="content--container-1">
        <h4>{displayedContent.contentTitle}</h4>
            <div className="titles">
        {displayedContent.chapters.map((item, index) => {
                return (
                    <ChapterBox itemGiven={item} closeAndOpenCCH={closeAndOpenCCH} indexPass={index} key={index}/>
                )
        })}
        </div>
        </div>
    </div> : null
}

export default ContentContainer
