import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) return null;

    return (
        <div className="px-6 mt-8">
            {/* Section Title */}
            <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>

            {/* Horizontal scroll row */}
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} poster_path={movie.poster_path} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
