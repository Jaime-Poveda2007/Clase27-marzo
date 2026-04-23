import { useEffect, useState } from "react";
import "./style.css";

function FUSUARIO() {
  const [username, setUsername] = useState("Invitado");
  const [nuevoNombre, setNuevoNombre] = useState("Invitado");
  const [favoritos, setFavoritos] = useState<string[]>([]);

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (savedName) {
      setUsername(savedName);
      setNuevoNombre(savedName);
    }

    const savedFavorites = localStorage.getItem("favoritos");
    if (savedFavorites) {
      setFavoritos(JSON.parse(savedFavorites));
    }
  }, []);

  const guardarNombre = () => {
    const cleanName = nuevoNombre.trim();
    if (!cleanName) return;

    setUsername(cleanName);
    localStorage.setItem("username", cleanName);
  };

  const quitarFavorito = (autor: string) => {
    const nuevosFavoritos = favoritos.filter((item) => item !== autor);
    setFavoritos(nuevosFavoritos);
    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  return (
    <div className="usuario-container">
      <h2>Usuario</h2>

      <p>
        Nombre actual: <strong>{username}</strong>
      </p>

      <div className="usuario-edit">
        <input
          type="text"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          placeholder="Cambiar nombre de usuario"
        />
        <button onClick={guardarNombre}>Guardar nombre</button>
      </div>

      <h3>Favoritos destacados</h3>

      {favoritos.length > 0 ? (
        <ul className="lista-favoritos">
          {favoritos.map((autor) => (
            <li key={autor}>
              {autor}{" "}
              <button onClick={() => quitarFavorito(autor)}>
                Quitar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes favoritos destacados todavía.</p>
      )}
    </div>
  );
}

export default FUSUARIO;