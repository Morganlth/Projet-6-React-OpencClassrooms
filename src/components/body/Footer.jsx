//IMPORTS

import '../../assets/css/spe/Footer.css'

import Logo from '../modules/Logo'

//EXPORT

function Footer()
{
    return (
        <footer className="flex f-column f-a-center">
            <Logo width="122" height="39" color="var(--light-color)" />

            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer