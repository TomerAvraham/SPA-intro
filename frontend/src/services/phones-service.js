const END_POINT = process.env.REACT_APP_BASE_API_URL;

export const getAllPhones = async () => {
  try {
    const res = await fetch(`${END_POINT}/phones/`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPhoneById = async (id) => {
  try {
    const res = await fetch(`${END_POINT}/phones/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
