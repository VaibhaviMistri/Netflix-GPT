import Header from "./Header";
import GPTSearchPage from "./GPTSearchPage";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearGPTMovies } from "../utils/gptSlice";

const Browse = () => {

  const dispatch = useDispatch();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();

  useEffect(() => {
    if (!showGPTSearch) {
      dispatch(clearGPTMovies());
    }
  }, [showGPTSearch, dispatch]);

  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <Header />
      {showGPTSearch ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse