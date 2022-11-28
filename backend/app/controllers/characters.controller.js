const { readJsonFileByName } = require("../helpers/json-helper");
const { FILES_NAME } = require("../constants/constants");
const rickAndMortyService = require("../services/rickAndMorty.service");

exports.getAllCharacters = async (req, res) => {
  const characters = await readJsonFileByName(FILES_NAME.characters);
  res.status(200).send({ characters });
};

exports.getAllRickAndMortyCharacters = async (req, res) => {
  const data = await rickAndMortyService.getAllCharacters();
  res.status(200).send(data);
};
