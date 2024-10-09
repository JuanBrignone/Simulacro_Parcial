import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import GameCard from "./Components/GameCard"; 
import GameDetails from "./Components/GameDetails"; 
import { useState, useEffect } from "react"; 
import { getGames } from "./api"; 
import './App.css';

// Componente principal de la aplicación
const App = () => {
  // Estado local 'games' para almacenar la lista de juegos y su método 'setGames' para actualizarlo
  const [games, setGames] = useState([]);

  // Hook useEffect para cargar los juegos cuando se monta el componente
  useEffect(() => {
    // Función asíncrona que obtiene los juegos desde la API
    const fetchGames = async () => {
      const gamesFromApi = await getGames(); // Llama a la función 'getGames' para obtener los juegos
      setGames(gamesFromApi); // Actualiza el estado 'games' con los juegos obtenidos
    };

    fetchGames(); // Ejecuta la función para cargar los juegos
  }, []); // La dependencia vacía significa que este código solo se ejecuta una vez al montar el componente

  // Función para eliminar un juego de la lista (FALTA implementar la eliminación en la API)
  const deleteGame = async (gameId) => {
    setGames(games.filter((game) => game.id !== gameId)); // Filtra y elimina el juego con el ID proporcionado
  };

  return (
    <Router>
      {/* Contenedor principal de la aplicación */}
      <div className="App">
        <div className="home-container">
          <h1>Juegos Olimpicos</h1> {/* Título de la página */}
          
          <button className="add-game-button">Agregar Juego</button> {/* Botón para agregar un juego (funcionalidad pendiente) */}
          
          {/* Grid de juegos que muestra una GameCard por cada juego */}
          <div className="games-grid">
            {games.map((game) => (
              // Renderiza el componente GameCard por cada juego
              <GameCard key={game.id} game={game} onDelete={deleteGame} />
            ))}
          </div>
        </div>

        {/* Definición de rutas usando react-router-dom */}
        <Routes>
          {/* Ruta para la página principal (vacía por ahora) */}
          <Route path="/" element={<div></div>} />
          {/* Ruta dinámica que muestra los detalles de un juego específico */}
          <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
