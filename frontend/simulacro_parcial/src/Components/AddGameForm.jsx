import React, { useState } from 'react';

/////////////////////////////////////////////
//NO ANDA AUN EL FORMULARIO DE AÑADIR JUEGO//
////////////////////////////////////////////


const AddGameForm = ({ onAddGame }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [players, setPlayers] = useState('');
  const [categories, setCategories] = useState('');

  // Cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    const newGame = { title, description, players, categories };

    // POST request para agregar un nuevo juego
    fetch('http://localhost:3000/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newGame),
    })
      .then((res) => res.json())
      .then((data) => {
        onAddGame(data);  // Actualizamos la lista de juegos con el nuevo juego
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título del juego"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
        required
      />
      <input
        type="text"
        value={players}
        onChange={(e) => setPlayers(e.target.value)}
        placeholder="Número de jugadores"
        required
      />
      <input
        type="text"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        placeholder="Categorías"
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddGameForm;
