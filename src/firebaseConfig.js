// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD59rx_9WVIOLQ-a0Sy_dxp5ohZwt2H99w",
  authDomain: "kodigomusic-4a9d7.firebaseapp.com",
  projectId: "kodigomusic-4a9d7",
  storageBucket: "kodigomusic-4a9d7.firebasestorage.app",
  messagingSenderId: "465954962615",
  appId: "1:465954962615:web:423ec7c4836ffd37ebe132",
  measurementId: "G-64ZFL7TTVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);