import axios from "axios";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await axios.get(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    let trailer = data?.data?.results.find(
      (video) => video.name === "Official Trailer"
    );

    if (!trailer) {
      trailer = data?.data?.results[0]; // fallback
    }
    dispatch(addTrailerVideo(trailer));
    };
    
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;