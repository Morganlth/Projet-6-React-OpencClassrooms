//IMPORTS

import '../../assets/css/spe/M_404.css'

//EXPORT

function M_404()
{
    return (
        <div className="error-404">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>

            <a className="block" href="/">Retourner sur la page d’accueil</a>
        </div>
    )
}

export default M_404