import { PROFILE_PHOTO } from "./constants";
import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth";

export const signUpUser = async (name, email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        const photoURL = PROFILE_PHOTO;
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
        return auth.currentUser;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
}

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    throw err;
  }
};