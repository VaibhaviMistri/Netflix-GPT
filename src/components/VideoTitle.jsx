const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute top-1/3 left-12 text-white max-w-xl">
            {/* Title */}
            <h1 className="text-5xl font-bold drop-shadow-lg">{ title}</h1>

            {/* Overview */}
            <p className="py-6 text-lg drop-shadow-md">{overview}</p>

            {/* Buttons */}
            <div className="flex space-x-4">
                <button className="bg-white text-black px-6 py-2 text-lg font-semibold rounded hover:bg-gray-300 transition">
                    ▶ Play
                </button>
                <button className="bg-gray-600/70 text-white px-6 py-2 text-lg font-semibold rounded hover:bg-gray-500/80 transition">
                    ℹ More Info
                </button>
            </div>
        </div>
    );
};

export default VideoTitle