//IMPORTS

import img from '../../assets/images/home-banner.png'

import Banner from '../modules/Banner'
import Gallery from '../modules/Gallery'

//EXPORT

function Home()
{
    return (
        <>
            <Banner title={<><span>Chez vous,&nbsp;</span> <span>partout et ailleurs</span></>} src={img} alt="falaise au bord de la mer" />

            <Gallery />
        </>
    )
}

export default Home