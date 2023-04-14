//IMPORTS

import '../../assets/css/spe/Gallery.css'

import { Component } from 'react'
import { getAllHousing } from '../../assets/js/housing'

import Card from './Card'

//EXPORT

class Gallery extends Component
{
    constructor(props)
    {
        super(props)

        this.state = { cards: null }
    }

    componentDidMount()
    {
        createAllCards().then(res => this.setState({ cards: res }))
    }

    render()
    {
        return (
            <div className="flex f-j-center f-wrap any-w gallery">
                { this.state.cards }
            </div>
        )
    }
}

export default Gallery

//FUNCTIONS

async function createAllCards()
{
    let housings = await getAllHousing()

    return housings.map(h => <Card key={h.id} {...h} />)
}