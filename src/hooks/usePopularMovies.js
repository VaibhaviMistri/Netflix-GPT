import axios from "axios";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          API_OPTIONS,
        );
        dispatch(addPopularMovies(data.data.results));
      } catch (error) {
        console.error(error.message);
      }
    };
    getPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;