//IMPORTS

import '../../assets/css/spe/Header.css'

import Logo from '../modules/Logo'

//EXPORT

function Header()
{
    const pathname = document.location.pathname, home = pathname === '/' ? 'active' : null, about = pathname === '/about'  ? 'active' : null

    return (
        <header className="absolute start-pos any-w any-h no-event">
            <div className="flex f-j-space-between sticky auto-event">
                <a className="flex f-a-center" href="/">
                    <Logo width="210" height="68" color="var(--main-color)" />
                </a>

                <nav>
                    <ul className="flex f-a-center any-h">
                        <li>
                            <a className={home} href="/">Accueil</a>
                        </li>
                        <li>
                            <a className={about} href="/about">A propos</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header