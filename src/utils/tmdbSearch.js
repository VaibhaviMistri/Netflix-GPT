import axios from "axios";
import { API_OPTIONS } from "./constants";

export const searchMovieTMDB = async (movieName) => {
    const res = axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    return (await res).data.results
}