import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../services/apiService";

const AllCharactersPage = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const data = await getAllCharacters();
      setCharacters(data);
    }
    fetchCharacters();
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <div>{character.name}</div>
      ))}
    </div>
  );
};

export default AllCharactersPage;
