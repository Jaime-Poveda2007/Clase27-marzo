import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import "./styleU.css";

function FUSUARIO() {
  const [usuario, setUsuario] = useState<User | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modo, setModo] = useState<"login" | "registro">("login");
  const [error, setError] = useState("");

  const [username, setUsername] = useState("Invitado");
  const [nuevoNombre, setNuevoNombre] = useState("Invitado");
  const [favoritos, setFavoritos] = useState<string[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });

    const savedName = localStorage.getItem("username");
    if (savedName) {
      setUsername(savedName);
      setNuevoNombre(savedName);
    }

    const savedFavorites = localStorage.getItem("favoritos");
    if (savedFavorites) {
      setFavoritos(JSON.parse(savedFavorites));
    }

    return () => unsub();
  }, []);

  const handleAuth = async () => {
    setError("");
    try {
      if (modo === "registro") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

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

      {usuario ? (
        <>
          <p>Sesión iniciada como: <strong>{usuario.email}</strong></p>
          <button onClick={handleLogout}>Cerrar sesión</button>

          <hr />

          <p>Nombre local: <strong>{username}</strong></p>
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
                  <button onClick={() => quitarFavorito(autor)}>Quitar</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No tienes favoritos destacados todavía.</p>
          )}
        </>
      ) : (
        <>
          <div className="auth-toggle">
            <button
              onClick={() => setModo("login")}
              className={modo === "login" ? "activo" : ""}
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => setModo("registro")}
              className={modo === "registro" ? "activo" : ""}
            >
              Registrarse
            </button>
          </div>

          <div className="usuario-edit">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
            />
            <button onClick={handleAuth}>
              {modo === "login" ? "Entrar" : "Crear cuenta"}
            </button>
          </div>

          {error && <p className="auth-error">{error}</p>}
        </>
      )}
    </div>
  );
}

export default FUSUARIO;