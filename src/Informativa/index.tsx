import { useNavigate } from "react-router"
import { Users, Search, Heart, BookOpen, Globe, Sparkles } from "lucide-react"
import "./style.css"

function IconoPrincipal() {
  return (
    <div className="icon-main">
      <BookOpen size={40} strokeWidth={1.2} color="#eebbc3" />
    </div>
  )
}

function Titulo() {
  return (
    <p className="title">
      Explora a los<br /><em>grandes poetas</em>
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
  return <div className="divider" />
}

const stats = [
  { value: "128", label: "Autores" },
  { value: "10k+", label: "Poemas" },
  { value: "100%", label: "Gratis" },
]

function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.label} className="stat">
          <span className="stat-value">{s.value}</span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

const features = [
  {
    Icon: Users,
    title: "Catálogo de autores",
    desc: "Navega por la lista completa de poetas clásicos de la literatura en inglés.",
  },
  {
    Icon: Search,
    title: "Búsqueda por autor",
    desc: "Encuentra poemas al instante con nuestra búsqueda en tiempo real.",
  },
  {
    Icon: Heart,
    title: "Guarda favoritos",
    desc: "Marca tus poetas preferidos y accede a ellos rápidamente.",
  },
  {
    Icon: Globe,
    title: "Fuente confiable",
    desc: "Todos los datos provienen de poetrydb.org, una API pública y actualizada.",
  },
]

function Features() {
  return (
    <div className="features-grid">
      {features.map(({ Icon, title, desc }) => (
        <div key={title} className="feature">
          <div className="feature-icon">
            <Icon size={26} strokeWidth={1.5} color="#eebbc3" />
          </div>
          <div>
            <p className="feature-title">{title}</p>
            <p className="feature-desc">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function CTA() {
  const navigate = useNavigate()
  return (
    <div className="cta-group">
      <button className="cta-primary" onClick={() => navigate("/")}>
        <Sparkles size={16} />
        Explorar poetas
      </button>
      <button className="cta-secondary" onClick={() => navigate("/favoritos")}>
        <Heart size={16} />
        Mis favoritos
      </button>
    </div>
  )
}

function Fuente() {
  return (
    <p className="source">
      Fuente: <code>poetrydb.org</code>
    </p>
  )
}

function FINFORMATIVA() {
  return (
    <div className="informativa-container">
      <IconoPrincipal />
      <Titulo />
      <Subtitulo />
      <Stats />
      <Divider />
      <Features />
      <CTA />
      <Fuente />
    </div>
  )
}

export default FINFORMATIVA