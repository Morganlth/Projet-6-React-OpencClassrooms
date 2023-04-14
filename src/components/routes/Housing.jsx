//IMPORTS

import '../../assets/css/spe/Housing.css'

import { Component } from 'react'
import { useParams } from 'react-router-dom'
import { getAllHousing } from '../../assets/js/housing'

import M_404 from './M_404'

import Slider from '../modules/Slider'
import Tag from '../modules/Tag'
import Star from '../modules/Star'
import Dropdown from '../modules/Dropdown'

//EXPORT

function withParams(Component)
{
    return props => <Component {...props} id={ useParams().id } />
}

class Validator extends Component
{
    constructor(props)
    {
        super(props)

        this.state = { housing: null }
    }

    componentDidMount()
    {
        getHousing(this.props.id)
        .then(res => this.setState({ housing: res }))
        .catch(error => this.setState({ housing: error }))
    }

    render()
    {
        const housing = this.state.housing

        return (
            <>
                {
                    housing instanceof Error ?
                    <M_404 /> :
                    !housing ?
                    <Load /> :
                    <Housing { ...housing } />
                }
            </>
        )
    }
}

export default withParams(Validator)

//FUNCTIONS

function Load()
{
    return <div>chargement</div> //futur : ajouter loader
}

function Housing(props)
{
    const { title, pictures, description, host, rating, location, equipments, tags } = props

    return (
        <div className="housing">
            <Slider itemsSRC={pictures} alt={description} />

            <div className="flex infos">
                <div className="flex f-column any-w left">
                    <h1>{ title }</h1>

                    <p>{ location }</p>

                    <div className="flex f-wrap tags-list">{ getTags(tags) }</div>
                </div>

                <div className="flex f-column f-j-space-between any-w right">
                    <div className="flex f-a-center author">
                        <p>{ getName(host.name) }</p>

                        <img src={host.picture} alt={host.name} width="64" height="64" />
                    </div>

                    <div className="rating">{ getStars(rating) }</div>
                </div>
            </div>

            <div className="flex description">
                <Dropdown title="Description" description={description} />

                <Dropdown title="Équipements" description={equipments} />
            </div>
        </div>
    )
}

function getName(name)
{
    const index = name.indexOf(' '), firstname = name.substring(0, index), lastname = name.substring(index + 1)
                            
    return firstname === '' || firstname === undefined || firstname === null ? lastname : <>{ firstname } <br /> { lastname }</>
}

function getTags(tags)
{
    let i = 0

    return tags.map(t => <Tag key={'tag-' + i++} tagname={t} />)
}

function getStars(rating)
{
    const stars = []

    for (let i = 0; i < 5; i++) stars.push(<Star key={'star-' + i} color={ i < rating ? 'var(--main-color)' : '#E3E3E3' } />)

    return stars
}

async function getHousing(id)
{
    const housing = (await getAllHousing()).find(h => h.id === id)

    if (housing) return housing
    else throw new ReferenceError()
}