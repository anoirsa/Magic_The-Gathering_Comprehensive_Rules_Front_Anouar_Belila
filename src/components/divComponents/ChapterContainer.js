import React, {useState, useEffect}from 'react'
import Button from '../Button'
import { fetchChapterSpecific } from '../Client'
import './ChapterContainer.css'

function ChapterContainer({chapterContainer,closeIt,dsplayedChapter}) {
    const [rules, setRules] = useState([]);
    if (chapterContainer) {
        fetchChapterSpecific(dsplayedChapter).then(data => data.json()).then(data => {
            console.log("We here")
            setRules(data);
        }).catch(error => console.log("There is an error"));
    }
    
    return chapterContainer ? <div className="main--chapter--class">
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <div className="chapter--container">
            {dsplayedChapter}
            {rules.map((item,index) => {
                return(
                <p>{item.roleText}</p>
                )
            })}
        </div>
    </div> : null
}

export default ChapterContainer
