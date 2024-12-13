import axios from 'axios';

const API_URL = 'https://run.mocky.io/v3/b7d8c07d-b6e2-495c-be4f-dee273b13855';

export const fetchNewsList = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.news;
  } catch (error) {
    throw new Error(error.message);
  }
};
