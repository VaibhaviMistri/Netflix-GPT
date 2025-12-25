import { Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import LoginShimmer from "./ShimmerLogin";

const Body = () => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
            setLoading(false);
        });

        return () => unsubscribe(); // cleanup listener
    }, [dispatch, navigate]);

    if (loading) return <LoginShimmer />;

    return <Outlet />;
}

export default Body