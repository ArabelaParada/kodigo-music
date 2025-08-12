// src/pages/Music.jsx

import { useState } from "react";
import "./Music.css";

const todasLasCanciones = [
  {
    titulo: "Imagine",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    titulo: "Hey Jude",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    titulo: "Let It Be",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }
];

function Music() {
  const [audio, setAudio] = useState(null);
  const [playlist, setPlaylist] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const cancionesFiltradas = todasLasCanciones.filter((cancion) =>
    cancion.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const reproducir = (url) => {
    if (audio) audio.pause();
    const nuevoAudio = new Audio(url);
    nuevoAudio.play();
    setAudio(nuevoAudio);
  };

  const agregarAPlaylist = (cancion) => {
    const yaExiste = playlist.find((item) => item.titulo === cancion.titulo);
    if (!yaExiste) {
      setPlaylist([...playlist, { ...cancion, favorito: 0 }]);
    }
  };

const eliminarDePlaylist = (titulo) => {
  const cancionEliminada = playlist.find((item) => item.titulo === titulo);

  // Si la canción eliminada es la que está sonando, detenla
  if (audio && cancionEliminada && audio.src === cancionEliminada.url) {
    audio.pause();
    setAudio(null); // limpiar referencia
  }

  // Eliminarla de la lista
  setPlaylist(playlist.filter((item) => item.titulo !== titulo));
};


  return (
    <div className="music-container">
      {/* Lista original */}
      <div className="music-lista">
        <h2>Música</h2>
        <input
          type="text"
          placeholder="Buscar canción..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="music-input"
        />

        <ul className="music-ul">
          {cancionesFiltradas.map((cancion, index) => (
            <li key={index} className="music-item">
              {cancion.titulo}
              <div>
                <button onClick={() => reproducir(cancion.url)} className="music-btn">
                  ▶️
                </button>
                <button onClick={() => agregarAPlaylist(cancion)} className="music-btn">
                  ➕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Playlist del usuario */}
      <div className="music-playlist">
        <h3>🎧 Tu Playlist Personalizada</h3>
        <ul className="music-ul">
          {playlist.map((item, index) => (
            <li key={index} className="music-item">
              <div>
                {item.titulo}
                <div className="estrella-contenedor">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <span
                      key={num}
                      className={`estrella ${num <= item.favorito ? "llena" : ""}`}
                      onClick={() => calificarFavorito(item.titulo, num)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <button onClick={() => reproducir(item.url)} className="music-btn">
                  ▶️
                </button>
                <button
                  onClick={() => eliminarDePlaylist(item.titulo)}
                  className="music-btn"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Music;