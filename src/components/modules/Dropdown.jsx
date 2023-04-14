//IMPORTS

import '../../assets/css/spe/Dropdown.css'

import openingArrow from '../../assets/images/icons/opening-arrow.svg'
import closingArrow from '../../assets/images/icons/closing-arrow.svg'

import { Component } from 'react'

//EXPORT

class Dropdown extends Component
{
    constructor(props)
    {
        super(props)

        this.update = this.update.bind(this)
        this.state = { open: false }
    }

    render()
    {
        const desc = this.props.description instanceof Array ? getListDescription(this.props.description) : this.props.description

        return (
            <div onClick={this.update} className="relative any-w dropdown">
                <div className="flex f-j-space-between f-a-center absolute start-pos any-w">
                    <h2>{ this.props.title ?? null }</h2>

                    <img className="arrow" src={ this.state.open ? closingArrow : openingArrow } alt="Arrow icon" width="24" height="14" />
                </div>

                <div className={ this.state.open ? 'block' : 'hidden' }>
                    <p className='any-w any-h'>{ desc ?? null }</p>
                </div>
            </div>
        )
    }

    update() { this.setState({ open: !this.state.open }) }
}

export default Dropdown

//FUNCTIONS

function getListDescription(desc)
{
    const list = []

    desc.forEach(e => list.push(e, <br key={randomKey()} />))

    return list
}

function randomKey()
{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    
    for (let i = 0; i < 10; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength))

    return result
}