import React from "react";
import { useNavigate } from "react-router-dom";

{/*CREA LA CARTA MOSTRANDO EL TITULO Y LOS DOS BOTONES DE DETALLES*/}

const GameCard = ({ game, onDelete }) => {
  const navigate = useNavigate();

  // Función para navegar a los detalles del juego
  const handleDetailsClick = () => {
    navigate(`/game/${game.id}`); //Cuenado se hace click en este boton en el app.jsx esta seteado que te lleve al GameDetails, el cual
                                  // te muestra los detalles del juego
  };

  return (
    <div className="game-card">
      <h2>{game.title}</h2>
      <button onClick={handleDetailsClick}>Detalles</button>  {/*Esto es lo que contiene la carta */}
      <button onClick={() => onDelete(game.id)}>Borrar</button>
    </div>
  );
};

export default GameCard;

