// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtJaTf38pBHMe5tTwTaxy3xBkJBN07fBI",
  authDomain: "fir-405e4.firebaseapp.com",
  projectId: "fir-405e4",
  storageBucket: "fir-405e4.appspot.com",
  messagingSenderId: "373353431059",
  appId: "1:373353431059:web:d9399e3cd70617b9ed7fe6",
  measurementId: "G-1K6DT8C98Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
