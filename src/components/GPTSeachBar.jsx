import { Search } from "lucide-react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { getGeminiMovies } from "../hooks/useGeminiSearch";
import { useState } from "react";
import { searchMovieTMDB } from "../utils/tmdbSearch";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/gptSlice";

const GPTSeachBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const movieNames = await getGeminiMovies(query);
    
    // const movies = movieNames.split(",").map(m => m.trim());

    const tmdbResults = await Promise.all(
      movieNames.map((movie) => searchMovieTMDB(movie))
    );    
    
    dispatch(addGPTMovies({
      movieNames,
      movieResults: tmdbResults
    }));
    
  };
  return (
    <div className="pt-40">
      <form
        className="flex items-center w-full max-w-2xl mx-auto p-2 bg-zinc-900 rounded-full shadow-md border border-zinc-600"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          value={query}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="flex-grow px-4 py-2 text-slate-100 bg-transparent focus:outline-none"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center justify-center px-4 py-2 bg-zinc-700 text-white rounded-full hover:bg-red-800 transition"
          onClick={handleSearch}
        >
          <Search size={18} />
          <span className="ml-2">{lang[langKey].search}</span>
        </button>
      </form>
     
    </div>
  )
}

export default GPTSeachBar