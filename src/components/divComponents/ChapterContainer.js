import React, {useState, useEffect}from 'react'
import Button from '../Button'
import { fetchChapterSpecific } from '../Client'
import './ChapterContainer.css'

function ChapterContainer({chapterContainer,closeIt,dsplayedChapter}) {
    
    
    return chapterContainer ? <div className="main--chapter--class">
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <div className="chapter--container">
        <h4>{dsplayedChapter.fullTitle}</h4>
            <table className="rules--table" >
                <tr>
                    <th>Rule ID</th>
                    <th>Rule Text</th>
                </tr>
            {dsplayedChapter.rulesInList.map((item, index) => {
                return(
                <tr key={index} >
                    <td>{item.roleId}</td>
                    <td>{item.roleText}</td>
                </tr>
                )
            })}

        </table>
            
        </div>
    </div> : null
}

export default ChapterContainer
