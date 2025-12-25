import { useLocation, useNavigate } from "react-router-dom"
import Header from "./Header"
import { validateData } from "../utils/validate";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { loginUser, signUpUser } from "../utils/authServices";
import { NETFLIX_BG } from "../utils/constants";

const LoginOrSignup = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const isLoginForm = location.pathname === '/';
    
    const handleButtonClick = async () => {
        const message = validateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        try {
            if (!isLoginForm) {
                const user = await signUpUser(name.current.value, email.current.value, password.current.value);
                const { uid, email: userEmail, displayName, photoURL } = user;
                dispatch(addUser({ uid, email: userEmail, displayName, photoURL }));
            } else {
                await loginUser(email.current.value, password.current.value);
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <div className="flex text-white">
            <Header />
            <img
                src={NETFLIX_BG}
                alt="Background img"
                className="absolute w-screen h-screen object-cover filter brightness-50"
            />
            <form
                onSubmit={(e) => e.preventDefault()}
                className="relative w-2/6 flex flex-col mx-auto my-24 px-16 py-12 bg-black/70 rounded font-bold"
            >
                <label className="text-3xl">{isLoginForm ? "Sign In" : "Sign Up"}</label>
                {!isLoginForm &&
                    <input
                        ref={name}
                        type="text"
                        placeholder="Name"
                        className="mt-6 h-14 bg-zinc-900/70 border rounded indent-4 font-semibold text-base"
                    />
                }
                <input
                    ref={email}
                    type="text"
                    placeholder="Email"
                    className="mt-6 h-14 bg-zinc-900/70 border rounded indent-4 font-semibold text-base"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="mt-6 h-14 bg-zinc-900/70 border rounded indent-4 font-semibold text-base"
                />
                {errorMessage && <p className="text-red-700 mt-5">Error: {errorMessage}</p>}
                <button
                    className="mt-6 bg-red-600 p-2 rounded text-base"
                    onClick={handleButtonClick}
                >
                    {isLoginForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="mt-6 font-semibold">
                    <span className="text-zinc-400">{isLoginForm ? "New to Netflix" : "Already a user"}?</span>
                    <span
                        className="cursor-pointer hover:underline"
                        onClick={() => {
                            setErrorMessage(null);
                            if (name.current) name.current.value = "";
                            if (email.current) email.current.value = "";
                            if (password.current) password.current.value = "";
                            navigate(isLoginForm ? "/signup" : "/")
                        }}
                    >
                        {isLoginForm ? "Sign up now" : "Sign In now"}.
                    </span>
                </p>
            </form>
        </div>
    )
}

export default LoginOrSignup