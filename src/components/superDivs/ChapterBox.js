import React from 'react'
import './ChapterBox.css'
 

function ChapterBox({titleGiven,closeAndOpenCCH}) {
    var url = "url('https://images.ctfassets.net/hrltx12pl8hq/8MpEm5OxWXiNqLvWzCYpW/24f02cfe391aa8f25845de858982d449/shutterstock_749707636__1__copy.jpg?fit=fill&w=840&h=350')"
    return (
        <div className="chapter--box"
            onClick = {() => closeAndOpenCCH(titleGiven.substring(0,3))}
        >
            <h2 className="stroke">{titleGiven}</h2>
        </div>
    )
}

export default ChapterBox



