//IMPORTS

import '../../assets/css/spe/Banner.css'

//EXPORT

function Banner({ title, src, alt })
{
    return (
        <section className="relative o-hidden any-w banner" >
            <img className="absolute start-pos any-w any-h fit-cover-center" src={src} alt={alt} />

            <div className="flex f-a-center relative any-w any-h shadow">{ title ? <h1 className="any-w">{title}</h1> : null }</div>
        </section>
    )
}

export default Banner