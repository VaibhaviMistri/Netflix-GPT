import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer"

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    return (
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
            {/* Background Video */}
            <div className="absolute top-0 left-0 w-full h-full scale-150">
                <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
                    title="YouTube video player"
                    allow="autoplay; encrypted-media; fullscreen"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>
    )
}

export default VideoBackground