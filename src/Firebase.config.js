// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS31FLM8CfnbmJASxVLlmodgvb17yC-rU",
    authDomain: "turitors.firebaseapp.com",
    projectId: "turitors",
    storageBucket: "turitors.appspot.com",
    messagingSenderId: "14314015672",
    appId: "1:14314015672:web:1e2ea34819d27dfad11d4d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
