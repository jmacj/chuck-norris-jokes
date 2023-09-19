// src/apiService.js
import axios from "axios";

const apiUrl = "http://localhost:3000/api";

export const getCategories = () => {
  return axios.get(`${apiUrl}/categories/list`);
};

export const getRandomJoke = (selectedCategory) => {
  const url = selectedCategory ? `${apiUrl}/jokes/random?category=${selectedCategory}` : `${apiUrl}/jokes/random`;
  return axios.get(url);
};

export const searchJokes = (query) => {
  return axios.get(`${apiUrl}/jokes/search?query=${query}`);
}
