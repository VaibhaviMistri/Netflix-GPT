// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC14IlWGrwgaGP2c2O_PHPqliHQ6mpBpUo",
  authDomain: "netflixgpt-18825.firebaseapp.com",
  projectId: "netflixgpt-18825",
  storageBucket: "netflixgpt-18825.firebasestorage.app",
  messagingSenderId: "592314558574",
  appId: "1:592314558574:web:f04bab8fb65ba367299e7f",
  measurementId: "G-7D980SRBQ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();