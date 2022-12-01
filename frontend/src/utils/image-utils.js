const BASE_IMAGE_URL = process.env.REACT_APP_BASE_API_URL;

export const addImageEndPointUrl = (url) => {
  return `${BASE_IMAGE_URL}${url}`;
};
