import React from 'react'
import Button from '../Button'
import './WordContainer.css'

function WordContainerF({wordContainer,closeIt, rulesToBeFound, searchedWord}) {
    return wordContainer ? <div className="main--word--class">
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <div className="word--container">
        <table className="rules--table" >
                <tr>
                    <th>Rule ID</th>
                    <th>Rule Text</th>
                </tr>
            {rulesToBeFound.map((item, index) => {
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

export default WordContainerF
