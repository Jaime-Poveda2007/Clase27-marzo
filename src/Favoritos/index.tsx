import { useState, useEffect } from 'react'
import "./style.css"

function FfAVORITOS() {
  const [authors, setAuthors] = useState<string[]>([])
  const [favoritos, setFavoritos] = useState<string[]>([])

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

  useEffect(() => {
    const guardados = localStorage.getItem('favoritos')
    if (guardados) {
      setFavoritos(JSON.parse(guardados))
    }
  }, [])

  const toggleFavorito = (autor: string) => {
    let nuevosFavoritos

    if (favoritos.includes(autor)) {
      nuevosFavoritos = favoritos.filter((f) => f !== autor)
    } else {
      nuevosFavoritos = [...favoritos, autor]
    }

    setFavoritos(nuevosFavoritos)
    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos))
  }

  return (
    <div className="tabla-container">
      <h2>Autores de Poesia</h2>
      <table className="tabla-posiciones">
        <thead>
          <tr>
            <th>#</th>
            <th>Autor</th>
            <th>Favorito</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((autor, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{autor}</td>
              <td>
                <button onClick={() => toggleFavorito(autor)}>
                  {favoritos.includes(autor) ? 'Quitar' : 'Destacar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FfAVORITOS