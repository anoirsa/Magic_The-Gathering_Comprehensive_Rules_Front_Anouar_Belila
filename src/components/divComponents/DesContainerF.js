import React from 'react'
import Button from '../Button'
import './DesContainer.css'

function DesContainerF({desContainer,closeIt,foundRule}) {
    return desContainer ? <div className="main--des--class">
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <div className="des--container">
        <table className="rules--table" >
                <tr>
                    <th>Rule ID</th>
                    <th>Rule Text</th>
                </tr>
            
            
                <tr>
                    <td>{foundRule.rule.roleId}</td>
                    <td>{foundRule.rule.roleText}</td>
                </tr>
              
        

        </table>
        </div>

    </div> : null
}

export default DesContainerF
