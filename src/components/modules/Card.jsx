//IMPORTS

import '../../assets/css/spe/Card.css'

import { Component } from 'react'

//EXPORT

class Card extends Component
{
    render()
    {
        const title = this.props.title, src = this.props.cover, alt = this.props.description
    
        return (
            <a className="o-hidden card" href={'/housing/' + this.props.id}>
                <article className="relative any-w any-h">
                    <img className="absolute start-pos any-w any-h fit-cover-center" src={src} alt={alt} width="340" height="340" />
                    <div className="relative any-w any-h shadow"></div>
                    <h2 className="absolute">{title}</h2>
                </article>
            </a>
        )
    }
}

export default Card