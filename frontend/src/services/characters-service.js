const END_POINT = process.env.REACT_APP_BASE_API_URL;

export const getAllCharacters = async () => {
  try {
    const res = await fetch(`${END_POINT}/characters/rickAndMorty`);
    const { results: characters } = await res.json();
    return characters;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
