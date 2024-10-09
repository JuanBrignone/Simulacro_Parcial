import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Componente GameDetails para mostrar los detalles de un juego específico
const GameDetails = () => {
  const { id } = useParams(); // Obtener el ID del juego de la URL usando useParams
  const [game, setGame] = useState(null); // Estado para guardar los datos del juego
  const [error, setError] = useState(null); // Estado para manejar errores en la carga de datos
  const navigate = useNavigate(); // Hook para navegar programáticamente entre rutas

  // useEffect para ejecutar el fetch de los detalles del juego al cargar el componente
  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/games/${id}`); // Realiza la petición a la API usando el ID del juego
        if (!response.ok) { // Si la respuesta no es exitosa, lanza un error
          throw new Error("Error al cargar los detalles del juego");
        }
        const data = await response.json(); // Convierte la respuesta a JSON
        setGame(data[0]); // Guarda el primer elemento del array en el estado game
      } catch (err) {
        setError(err.message); // Guarda el mensaje de error en caso de fallo
      }
    };

    fetchGameDetails(); // Llama a la función que realiza la petición
  }, [id]); // Se ejecuta de nuevo si el ID cambia

  // Si ocurre un error, lo muestra en pantalla
  if (error) return <div>{error}</div>;

  // Si aún no se han cargado los datos del juego, muestra un mensaje de carga
  if (!game) return <div>Cargando...</div>;

  // Renderizado de los detalles del juego
  return (
    <div>
      <h1>{game.title}</h1> {/* Muestra el título del juego */}
      <p><strong>Descripción:</strong> {game.description}</p> {/* Muestra la descripción del juego */}
      <p><strong>Jugadores:</strong> {game.players}</p> {/* Muestra el número de jugadores */}
      <p><strong>Categorías:</strong> {game.categories}</p> {/* Muestra las categorías del juego */}
      {/* Botón para volver a la página de inicio */}
      <button className='atras-button' onClick={() => navigate("/")}>Atras</button>
    </div>
  );
};

export default GameDetails;
