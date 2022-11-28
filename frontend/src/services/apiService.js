const DEFAULT_OPTIONS = {
  header: { "content-type": "application/json" },
};

const END_POINT = "http://localhost:8000";

export const getAllCharacters = async () => {
  try {
    const res = await fetch(
      `${END_POINT}/characters/rickAndMorty`,
      DEFAULT_OPTIONS
    );
    const { results: characters } = await res.json();
    return characters;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
