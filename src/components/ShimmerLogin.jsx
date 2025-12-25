import Header from "./Header";

const LoginShimmer = () => {
    return (
        <div className="flex text-white">
            <Header />
            {/* Background */}
            <div className="absolute w-screen h-screen bg-zinc-900 animate-pulse"></div>

            {/* Shimmer form */}
            <form className="relative w-2/6 flex flex-col mx-auto my-24 px-16 py-12 bg-black/70 rounded">
                {/* Title shimmer */}
                <div className="h-8 w-32 bg-zinc-700 rounded animate-pulse mb-6"></div>

                {/* Input shimmers */}
                <div className="h-14 bg-zinc-800 rounded mb-6 animate-pulse"></div>
                <div className="h-14 bg-zinc-800 rounded mb-6 animate-pulse"></div>
                <div className="h-14 bg-zinc-800 rounded mb-6 animate-pulse"></div>

                {/* Button shimmer */}
                <div className="h-12 w-full bg-red-800 rounded mb-6 animate-pulse"></div>

                {/* Text shimmer */}
                <div className="h-5 w-48 bg-zinc-700 rounded mx-auto animate-pulse"></div>
            </form>
        </div>
    );
};

export default LoginShimmer;