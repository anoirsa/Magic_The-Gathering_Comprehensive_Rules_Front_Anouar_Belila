import React from 'react'
import Button from '../Button'
import './DesContainer.css'

function DesContainerF({desContainer,closeIt}) {
    return desContainer ? <div className="main--des--class">
        <Button chosenStyle="btn--outline" textGiven="CLOSE"  chosenSize="btn--small" clickMe={closeIt}/>
        <div className="des--container">

        </div>

    </div> : null
}

export default DesContainerF
