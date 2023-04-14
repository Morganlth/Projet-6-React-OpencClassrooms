//IMPORTS

import '../../assets/css/spe/Slider.css'

import { Component, createRef } from 'react'

//EXPORT

class Slider extends Component
{
    constructor(props)
    {
        super(props)

        this.getCover = this.getCover.bind(this)
        this.getSlider = this.getSlider.bind(this)
        this.updateSlider = this.updateSlider.bind(this)
        this.container = createRef()
        this.size = this.props.itemsSRC.length

        this.state = { x: 1 }
    }

    render()
    {
        return (
            <div className="relative o-hidden slider">
                { this.size === 1 ? this.getCover() : this.getSlider() }
            </div>
        )
    }

    getCover()
    {
        return <div className="any-w any-h"><img className="any-w any-h fit-cover-center" src={this.props.itemsSRC} alt={this.props.alt} /></div>
    }

    getSlider()
    {
        return (
            <>
                <svg onClick={this.updateSlider}
                className="absolute pointer pre" width="48" height="80" viewBox="0 0 48 80" fill="var(--light-color)" xmlns="http://www.w3.org/2000/svg">
                    <path className="no-event" d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"/>
                </svg>

                <div className="flex any-w any-h container" ref={this.container}>
                    { getSliderItems(this.props.itemsSRC, this.props.alt) }
                </div>

                <svg onClick={this.updateSlider}
                className="absolute pointer after" width="48" height="80" viewBox="0 0 48 80" fill="var(--light-color)" xmlns="http://www.w3.org/2000/svg">
                    <path className="no-event" d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"/>
                </svg>

                <span className="absolute count">{ this.state.x + '/' + this.props.itemsSRC.length }</span>
            </>
        )
    }

    updateSlider(sE)
    {
        const width = this.container.current.offsetWidth
        let x = this.state.x

        sE.target.classList.contains('pre') ? x-- : x++

        if (x <= 0) x = this.size
        else if (x > this.size) x = 1

        this.container.current.style.transform = `translateX(${(x-1)*-width}px)`
        this.setState({ x: x })
    }
}

export default Slider

//FUNCTIONS

function getSliderItems(itemsSRC, alt)
{
    let i = 0
    
    return itemsSRC.map(src => <img className="any-w any-h fit-cover-center" key={'slider-item-' + i++} src={src} alt={alt} width={1240} height="415" />)
}