//IMPORTS

import '../../assets/css/spe/Tag.css'

//EXPORT

function Tag({ tagname })
{
    return (<span className="flex f-center o-hidden tag">{ tagname }</span>)
}

export default Tag