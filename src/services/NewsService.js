import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchNewsList = async () => {
  try {
    const response = await axios.get(API_URL);
    const newsArray = response.data.news;
    return newsArray;
  } catch (error) {
    throw new Error(error.message);
  }
};
