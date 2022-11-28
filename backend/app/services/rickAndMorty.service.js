const axios = require("axios");

const API_ENDPOINT = "https://rickandmortyapi.com/api";

exports.getAllCharacters = async () => {
  const { data } = await axios.get(API_ENDPOINT + "/character");
  return data;
};
