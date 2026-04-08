import { useState, useEffect } from 'react'

function FHOME() {
  const [authors, setAuthors] = useState<string[]>([])

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
//https://github.com/sdtibata/liga-react/blob/main/src/home/index.tsx --- IGNORE ---
    fetchData()
  }, [])

  return (
    <div className="tabla-container">
      <h2>Autores de Poesia</h2>
      <table className="tabla-posiciones">
        <thead>
          <tr>
            <th>#</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
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