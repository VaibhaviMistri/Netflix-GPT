import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ poster_path }) => {

    if (!poster_path) return null;
    return (
        <div className="w-36 md:w-44 flex-shrink-0 cursor-pointer transform transition duration-300 hover:scale-110">
            <img
                src={IMG_CDN_URL + poster_path}
                alt="Movie Poster"
                className="rounded-md shadow-lg"
            />
        </div>
    )
}

export default MovieCard