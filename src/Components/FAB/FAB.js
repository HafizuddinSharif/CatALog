import React from 'react'
import burger from '../../Assets/Navigation/hamburger_menu.svg'
import favorite from '../../Assets/Messaging/favorite.svg'
import cancel from '../../Assets/Navigation/cancel.svg'

const icon = {
    "width": "40px",
    "backgroundColor": "#fafafa",
    "padding": "10px",
    "margin": "0 auto",
    "marginBottom": "10px",
}

const iconBig = {
    "width": "60px",
    "marginBottom": "10px",
    "backgroundColor": "#f54a29",
    "padding": "10px",
}



const fab = {
    "bottom": "40px",
    "right": "5%",

}

function FAB() {
    return (
        <div className="position-fixed d-flex flex-column" style={ fab }>
            <img className="rounded-circle shadow rounded" src={ cancel } style={ icon }></img>
            <img className="rounded-circle shadow rounded" src={ favorite } style={ icon }></img>
            <img className="rounded-circle shadow rounded" src={ burger } style={ iconBig }></img>
        </div>
    )
}

export default FAB
