import React, { useEffect, useState } from "react";
import { getAllCharacters } from "../services/characters-service";
import CharacterCard from "../components/cards/CharacterCard/CharacterCard";

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
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  );
};

export default AllCharactersPage;
