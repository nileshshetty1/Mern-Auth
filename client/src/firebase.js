// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-75774.firebaseapp.com",
  projectId: "mern-auth-75774",
  storageBucket: "mern-auth-75774.appspot.com",
  messagingSenderId: "927669566364",
  appId: "1:927669566364:web:070666212d70a1a4ca6659",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
