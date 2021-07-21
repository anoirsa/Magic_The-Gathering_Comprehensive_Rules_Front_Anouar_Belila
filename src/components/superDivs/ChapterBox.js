import React from 'react'
import './ChapterBox.css'
 

function ChapterBox({itemGiven,closeAndOpenCCH,indexPass}) {
    var url = "url('https://images.ctfassets.net/hrltx12pl8hq/8MpEm5OxWXiNqLvWzCYpW/24f02cfe391aa8f25845de858982d449/shutterstock_749707636__1__copy.jpg?fit=fill&w=840&h=350')"
    return (
        <div className="chapter--box"
            onClick = {() => closeAndOpenCCH(itemGiven,indexPass)}
        >
            <h2 className="stroke">{itemGiven.fullTitle}</h2>
        </div>
    )
}

export default ChapterBox



