import React from 'react'
import star from '../../Assets/Misc/star.svg'
import circle from '../../Assets/AV/record_alt.svg'

function Cards( props ) {

    const catImage = props.imageSrc

    const image = {
        "width": "344px",
        "height": "192px"
    }

    const icon = {
        "height": "20px",
        "margin": "auto"
    }

    const title = {
        "fontSize": "16px",
        "margin": "0 5px"
    }

    const bottom = {
        "margin": "5px 5px"
    }

    const card = {
        "borderBottom": "1px solid #bdbdbd",
        "margin": "30px 0 0 0"
    }

    return (
        <div style={ card }>
            <img src={ catImage } style={ image }></img>
            <div className="d-flex justify-content-between" style={ bottom }>
                <div className="d-flex ">
                    <img src={ circle } style={ icon }></img>
                    <p className="title" style={ title }>{ props.name }</p>
                </div>
                <div className="stars">
                    <img src={ star } style={ icon }></img>
                    <img src={ star } style={ icon }></img>
                    <img src={ star } style={ icon }></img>
                    <img src={ star } style={ icon }></img>
                    <img src={ star } style={ icon }></img>
                </div>
            </div>
        </div>
    )
}

export default Cards
