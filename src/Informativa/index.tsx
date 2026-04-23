import "./style.css"

function IconoPrincipal() {
  return (
    <div className="icon-main">
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M8 6h10l6 6v14H8V6z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M18 6v6h6" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M11 16h10M11 20h7" stroke="#378ADD" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  )
}

function Titulo() {
  return (
    <p className="title">
      Explora a los<br/><em>grandes poetas</em>
    </p>
  )
}

function Subtitulo() {
  return (
    <p className="subtitle">
      Descubre la obra completa de más de 128 autores clásicos de la poesía en inglés.
    </p>
  )
}

function Divider() {
  return <div className="divider"></div>
}

const features = [
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#185fa5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
    title: "Catálogo de autores", 
    desc: "Navega por la lista completa de poetas."
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#185fa5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5l4 4"/></svg>,
    title: "Búsqueda por autor", 
    desc: "Encuentra poemas al instante."
  },
  { 
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="#185fa5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.065 6.065 0 0 1 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
    title: "Guarda favoritos", 
    desc: "Accede rápido a tus poetas."
  }
]

function Features() {
  return (
    <>
      {features.map((f, i) => (
        <div key={i} className="feature">
          <div className="feature-icon">{f.icon}</div>
          <div>
            <p className="feature-title">{f.title}</p>
            <p className="feature-desc">{f.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

function Tags() {
  return (
    <div className="tags">
      <span className="tag">128 autores</span>
      <span className="tag">Gratis</span>
      <span className="tag">Sin registro</span>
    </div>
  )
}

function Fuente() {
  return <p className="source">Fuente: <code>poetrydb.org</code></p>
}

function FINFORMATIVA() {
  return (
    <div className="container">
      <IconoPrincipal />
      <Titulo />
      <Subtitulo />
      <Divider />
      <Features />
      <Tags />
      <Fuente />
    </div>
  )
}

export default FINFORMATIVA