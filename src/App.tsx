import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router'
import { Home, Users, Star, Info, Plus, User } from 'lucide-react'
import FEQUIPO from './EQUIPO'
import FfAVORITOS from './Favoritos'
import FHOME from './home'
import FINDEX from './Informativa'
import FEXTRA from './EXTRA'
import FUSUARIO from './Usuario'
import "./App.css"

const navItems = [
  { to: "/",            label: "Home",      Icon: Home  },
  { to: "/equipo",      label: "Equipo",    Icon: Users },
  { to: "/favoritos",   label: "Favoritos", Icon: Star  },
  { to: "/informativa", label: "Info",      Icon: Info  },
  { to: "/extra",       label: "Extra",     Icon: Plus  },
  { to: "/usuario",     label: "Usuario",   Icon: User  },
]

function BottomNav() {
  const location = useLocation()
  return (
    <nav className="c-menu">
      {navItems.map(({ to, label, Icon }) => (
        <Link
          key={to}
          to={to}
          className={`c-menu__item ${location.pathname === to ? "activo" : ""}`}
        >
          <Icon size={22} strokeWidth={1.5} />
          <span className="c-menu__label">{label}</span>
        </Link>
      ))}
    </nav>
  )
}

function App() {
  return (
    <Router>
      <BottomNav />
      <Routes>
        <Route path="/" element={<FHOME />} />
        <Route path="/equipo" element={<FEQUIPO />} />
        <Route path="/favoritos" element={<FfAVORITOS />} />
        <Route path="/informativa" element={<FINDEX />} />
        <Route path="/extra" element={<FEXTRA />} />
        <Route path="/usuario" element={<FUSUARIO />} />
      </Routes>
    </Router>
  )
}

export default App