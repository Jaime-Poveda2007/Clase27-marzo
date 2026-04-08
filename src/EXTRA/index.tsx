import { useState ,useEffect } from 'react';   
import "./style.css"

function FEXTRA() {
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

    const mujeres = [
        "Amy Levy", "Ann Taylor", "Anne Bradstreet", "Anne Bronte",
    "Anne Killigrew", "Anne Kingsmill Finch", "Annie Louisa Walker",
    "Charlotte Bronte", "Charlotte Smith", "Christina Rossetti",
    "Eliza Cook", "Elizabeth Barrett Browning", "Emily Bronte",
    "Emily Dickinson", "Emma Lazarus", "George Eliot",
    "Helen Hunt Jackson", "Jane Austen", "Jane Taylor",
    "Julia Ward Howe", "Katherine Philips", "Lady Mary Chudleigh",
    "Louisa May Alcott", "Mary Elizabeth Coleridge",
    "Phillis Wheatley", "Sarah Flower Adams" 
    ]

    const grupoMujeres = authors.filter((autor) => mujeres.includes(autor))
    const grupoHombres = authors.filter((autor) => !mujeres.includes(autor))
    
    return (    
        <div className="tabla-container">
            <h2>Autores Mujeres</h2>
            <table className="tabla-posiciones">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {grupoMujeres.map((author, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Autores Hombres</h2>
            <table className="tabla-posiciones">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Autor</th>
                    </tr>
                </thead>
                <tbody>
                    {grupoHombres.map((author, index) => (
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
export default FEXTRA
