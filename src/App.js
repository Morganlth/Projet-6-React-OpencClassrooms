//IMPORTS

import './App.css'
import './assets/css/defaults/set.css'
import './assets/css/defaults/class.css'
import './assets/css/defaults/media.css'

import Header from './components/body/Header'
import MainRouter from './components/body/MainRouter'
import Footer from './components/body/Footer'

//EXPORT

function App()
{
  return (
    <div className="relative App">
      <Header />
      <MainRouter />
      <Footer />
    </div>
  )
}

export default App
