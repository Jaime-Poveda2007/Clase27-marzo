import { useState, useEffect } from 'react'
import "./styleE.css"

function FEQUIPO() {
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

        fetchData()
    }, [])
    
    const grupoA = authors.filter((autor) =>{
        const letra = autor.split(" ")[0][0].toUpperCase()
        return letra >= "A" && letra <= "F"

    })
    const grupoB = authors.filter((autor) =>{
        const letra = autor.split(" ")[0][0].toUpperCase()
        return letra >= "G" && letra <= "M"
    })
    const grupoC = authors.filter((autor) =>{
        const letra = autor.split(" ")[0][0].toUpperCase()
        return letra >= "N" && letra <= "Z"
    })

    return (
        <div className="tabla-container">
            <h2>Equipo A - F</h2>
            <table className="tabla-posiciones">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {grupoA.map((author, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Equipo G - M</h2>
            <table className="tabla-posiciones">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {grupoB.map((author, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Equipo N - Z</h2>
            <table className="tabla-posiciones">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {grupoC.map((author, index) => (
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

export default FEQUIPO
