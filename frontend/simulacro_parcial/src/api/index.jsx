export const getGames = async () => {
    const url = "http://localhost:3000/api/games"; 
    try {
      const response = await fetch(url); //el fetch hace la peticion GET por defecto trayendo todos los datos del backend
      if (response.ok) {
        const payload = await response.json();
        return payload;
      } else {
        console.error("An error happened");
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
};


