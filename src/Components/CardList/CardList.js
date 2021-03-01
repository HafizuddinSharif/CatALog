import React from 'react'
import Cards from '../Cards/Cards'
import cat1 from '../../Assets/CatPic/catpic1.png'

function CardList() {

    const cardList = {
        "width": "344px",
        "margin": "0 35%"
    }
    return (
        <div style={ cardList }>
            <Cards name="Card title" imageSrc={ cat1 }/>
            <Cards name="Card title" imageSrc={ cat1 }/>
            <Cards name="Card title" imageSrc={ cat1 }/>
            <Cards name="Card title" imageSrc={ cat1 }/>
        </div>
    )
}

export default CardList
