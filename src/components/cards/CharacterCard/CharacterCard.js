import React from "react";
import {
  CardContainer,
  CardData,
  CardMedia,
  CardTitle,
  CharacterStatus,
  CharacterCardPropertyLabel,
  CharacterCardPropertyValue,
} from "./CharacterCard.style";

const CharacterCardProperty = ({ label, value }) => {
  return (
    <>
      <CharacterCardPropertyLabel>{label}</CharacterCardPropertyLabel>
      <CharacterCardPropertyValue>{value}</CharacterCardPropertyValue>
    </>
  );
};

const CharacterCard = ({ character }) => {
  return (
    <CardContainer>
      <CardMedia src={character.image} />
      <CardTitle>{character.name}</CardTitle>
      <CardData>
        <CharacterStatus status={character.status} />
        {character.species}-{character.gender}
      </CardData>
      <CharacterCardProperty
        label={"Last known location: "}
        value={character.location.name}
      />
      <CharacterCardProperty
        label={"Original location: "}
        value={character.origin.name}
      />
    </CardContainer>
  );
};

export default CharacterCard;
