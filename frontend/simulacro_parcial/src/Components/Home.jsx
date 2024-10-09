import React, { useEffect, useState } from 'react';
import { getGames } from '../api'; 
import GameCard from './GameCard'; 

const Home = () => {
  const [games, setGames] = useState([]); // Estado para almacenar los juegos
  const [isLoading, setIsLoading] = useState(true); // Estado de carga

  // Utilizamos useEffect para cargar los juegos al montar el componente
  useEffect(() => {
    const fetchGames = async () => {
      const data = await getGames(); //este getGames esta en el index.jsx de la carpeta api, donde se hace el fetch para el get
      setGames(data); // Guardamos los juegos en el estado
      setIsLoading(false); // Cambiamos el estado de carga
    };

    fetchGames(); // Llamamos a la función para obtener los juegos
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // Mostramos un mensaje mientras se cargan los datos
  }

  return (
    <div className="home-container">
      <h1>Juegos Olimpicos</h1>
      <button className="add-game-button">Agregar juego</button> {/* Botón para agregar un nuevo juego */}

      <div className="games-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} /> // Renderizamos cada juego con el componente GameCard
        ))}
      </div>
    </div>
  );
};

export default Home;
