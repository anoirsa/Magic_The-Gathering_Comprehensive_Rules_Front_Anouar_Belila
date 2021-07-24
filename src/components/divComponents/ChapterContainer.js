import React, {useState, useEffect}from 'react'
import Button from '../Button'
import { fetchChapterSpecific } from '../Client'
import parse from 'html-react-parser';
import './ChapterContainer.css'

function ChapterContainer({chapterContainer,closeIt,dsplayedChapter, nextChapter, lastChapter, toContent}) {
    
    
    return chapterContainer ? <div className="main--chapter--class">
        <div className="buttonContainer">
        <Button chosenStyle="btn--outline" textGiven="Content"  chosenSize="btn--small" clickMe={toContent}/>      
        <Button chosenStyle="btn--outline" textGiven="PREVIOUS CH"  chosenSize="btn--small" clickMe={lastChapter}/>   
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <Button chosenStyle="btn--outline" textGiven="NEXT CH"  chosenSize="btn--small" clickMe={nextChapter}/>
        </div>
        <div className="chapter--container">
        <h4>{dsplayedChapter.fullTitle}</h4>
            <table className="rules--table" >
                <tr>
                    <th>Rule ID</th>
                    <th>Rule Text</th>
                </tr>
            {dsplayedChapter.rulesInList.map((item, index) => {
                let reactElementForStr =
                traverse(new DOMParser().parseFromString(item.roleText, 'text/html'))
                return(
                <tr key={index} >
                    <td>{item.roleId}</td>
                    <td>{parse(item.roleText)}</td>
                </tr>
                )
            })}

        </table>
            
        </div>
    </div> : null
}

function traverse(node) {
    let children = []
    for (let i = 0; i < node.children.length; i++)
      children.push(traverse(node.children.item(i)))
    return React.createElement(node.localName, null, children)
    // or maybe use the following instead (React's API doc
    // isn't very clear about this):
    // return React.createElement(node.localName, null, ...children)
  }

export default ChapterContainer
