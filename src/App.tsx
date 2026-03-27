import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'
import FEQUIPO from './EQUIPO'
import FfAVORITOS from './Favoritos'
import FHOME from './home'
import FINDEX from './Informativa'
import FEXTRA from './EXTRA'
import FUSUARIO from './Usuario'
import "./App.css"

function App() {

  return (
    <>
      <Router>
        <nav className='c-menu'>
          <Link to="/">Home</Link>
          <Link to="/equipo">Equipo</Link>
          <Link to="/favoritos">Favoritos</Link>
          <Link to="/informativa">Informativa</Link>
          <Link to="/extra">Extra</Link>
          <Link to="/usuario">Usuario</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FHOME />} />
          <Route path="/equipo" element={<FEQUIPO />} />
          <Route path="/favoritos" element={<FfAVORITOS />} />
          <Route path="/informativa" element={<FINDEX />} />
          <Route path="/extra" element={<FEXTRA />} />
          <Route path="/usuario" element={<FUSUARIO />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
