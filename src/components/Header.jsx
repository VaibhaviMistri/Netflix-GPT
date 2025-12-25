import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../utils/authServices";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    const handleGPTSearchClick = () => {
        dispatch(toggleGPTSearchView());
    }

    const handleSignOut = async () => {
        try {
            await logoutUser();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="absolute w-screen px-5 py-2 z-10 bg-gradient-to-b from-black flex justify-between text-white">
            <img
                src={NETFLIX_LOGO}
                alt="Netflix logo"
                className="w-48"
            />
            {user && <div className="flex items-center w-96 justify-end gap-2">
                {showGPTSearch && <select
                    className="px-3 py-2 rounded-md border border-gray-300 bg-zinc-800 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    onChange={handleLanguageChange}
                >
                    {SUPPORTED_LANGUAGES.map((lang) => (
                        <option
                            key={lang.identifier}
                            value={lang.identifier}
                        >
                            {lang.name}
                        </option>
                    ))}
                </select>
                }

                <img
                    src={user.photoURL}
                    alt="User Icon"
                    className="w-10 h-10 rounded"
                />
                <button
                    className="bg-amber-700 p-2 rounded text-base"
                    onClick={handleGPTSearchClick}
                >
                    {showGPTSearch ? "Go Home" : "GPT"}
                </button>
                <button
                    className="bg-red-600 p-2 rounded text-base"
                    onClick={handleSignOut}
                >
                    Sign out
                </button>
            </div>
            }
        </div>
    );
};

export default Header;