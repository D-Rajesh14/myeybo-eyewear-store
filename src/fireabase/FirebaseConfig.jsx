// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbRI2BZnULUCCEXa8VxOzfSSU2-toFgxY",
  authDomain: "myfirstapp-f764b.firebaseapp.com",
  projectId: "myfirstapp-f764b",
  storageBucket: "myfirstapp-f764b.firebasestorage.app",
  messagingSenderId: "605967365862",
  appId: "1:605967365862:web:d1cc8e3519b80817c92d27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;