import axios from 'axios';

const API_URL = 'https://cs464p564-frontend-api.vercel.app/api/countries';

export const getCountries = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching countries', error);
  }
};