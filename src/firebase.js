// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD59rx_9WVIOLQ-a0Sy_dxp5ohZwt2H99w",
  authDomain: "kodigomusic-4a9d7.firebaseapp.com",
  projectId: "kodigomusic-4a9d7",
  storageBucket: "kodigomusic-4a9d7.firebasestorage.app",
  messagingSenderId: "465954962615",
  appId: "1:465954962615:web:423ec7c4836ffd37ebe132",
  measurementId: "G-64ZFL7TTVB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

