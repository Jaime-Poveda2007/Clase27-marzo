import { useState, useEffect } from 'react'
import './style.css'
function FHOME() {
  const [authors, setAuthors] = useState<string[]>([])
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://poetrydb.org/author')
        const data = await res.json()

        setAuthors(data.authors)
      } catch (error) {
        console.error('Error cargando datos:', error)
      }
    }
    fetchData()
  }, [])
  const authorsFiltrados = authors.filter((autor) =>
    autor.toLowerCase().includes(busqueda.toLowerCase())
)
  return (
    <div className="tabla-container">
      <h2>Autores de Poesia</h2>

      <input
        type="text"
        placeholder="Buscar autor..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <table className="tabla-posiciones">
        <thead>
          <tr>
            <th>#</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {authorsFiltrados.map((author, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FHOME