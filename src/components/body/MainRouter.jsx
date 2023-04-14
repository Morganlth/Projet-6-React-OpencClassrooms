//IMPORTS

import '../../assets/css/spe/Main.css'

import { Routes, Route } from 'react-router-dom'

import Home from '../routes/Home'
import About from '../routes/About'
import Housing from '../routes/Housing'
import M_404 from '../routes/M_404'

//EXPORT

function MainRouter()
{
    return (
        <main>
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/housing/:id" element={ <Housing /> } />
                <Route path="*" element={ <M_404 /> } />
            </Routes>
        </main>
    )
}

export default MainRouter