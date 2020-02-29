import axios from "axios";

const apiKey = "?apikey=4d5a0105";

const service = axios.create({
  baseURL: "http://www.omdbapi.com/"
});

const searchMovies = s => {
  return service.get(`${apiKey}&s=${s}`);
};

const searchOne = movieId => {
  return service.get(`${apiKey}&i=${movieId}`);
};

export { searchMovies, searchOne };
