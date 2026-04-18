import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";


function Favoritos() {
  const [favorites, setFavorites] = useState<string[]>([]);

  // 🔁 cargar favoritos desde localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(stored);
  }, []);

  // 🔁 invertir mapa: slug → nombre bonito


  return (
    <div>
      <h1>Favoritos</h1>

      {favorites.length === 0 ? (
        <p>No tienes equipos favoritos</p>
      ) : (
        <ul>
          {favorites.map((team) => (
            <li key={team}>
              <Link to={`/equipo/${team}`}>
                {team}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;