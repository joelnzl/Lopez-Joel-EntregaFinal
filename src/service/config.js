
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "lefleur-shop.firebaseapp.com",
  projectId: "lefleur-shop",
  storageBucket: "lefleur-shop.appspot.com",
  messagingSenderId: "515411535416",
  appId: "1:515411535416:web:b790e11d41945d235328cd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);