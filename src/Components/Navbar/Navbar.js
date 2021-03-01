import React from 'react'
import burger from '../../Assets/Navigation/hamburger_menu.svg'
import more from '../../Assets/Navigation/more_vertical.svg'

const icon = {
    "height": "20px",
    "color": "#ffffff"
}

const navbar = {
    "backgroundColor": "#007cb0"
}

const header = {
    "color": "#ffffff"
}

function Navbar() {
    return (
        <div className="d-flex navbar px-4" style={ navbar }>
            <img src={ burger } style={ icon }></img>
            <div className="header" style={ header }>Cat-a-log</div>
            <img src={ more } style={ icon }></img>
        </div>
    )
}

export default Navbar
