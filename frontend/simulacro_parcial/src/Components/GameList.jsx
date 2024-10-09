import React from 'react';
import GameCard from './GameCard'; // Importa el componente GameCard que se usará para mostrar cada juego individualmente

// Componente GameList que recibe dos props: games (array de juegos) y onDelete (función para eliminar un juego)
const GameList = ({ games, onDelete }) => {
  return (
    <div className="game-list"> {/* Contenedor para la lista de juegos */}
      
      {/* Mapea el array de juegos, creando un componente GameCard por cada juego */}
      {games.map((game) => (
        <GameCard 
          key={game.id} // Clave única para cada GameCard, basada en el id del juego. Esto ayuda a React con la eficiencia en el renderizado.
          game={game} // Pasa los datos del juego actual como prop al componente GameCard
          onDelete={onDelete} // Pasa la función onDelete como prop para manejar la eliminación de juegos
        />
      ))}

    </div>
  );
};

export default GameList;
