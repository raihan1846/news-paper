// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATsOdULC_gyPr78Ux_YiN_Tc-qJceTeH0",
  authDomain: "newspaper-60656.firebaseapp.com",
  projectId: "newspaper-60656",
  storageBucket: "newspaper-60656.firebasestorage.app",
  messagingSenderId: "987441159125",
  appId: "1:987441159125:web:22e59ee063c5048a3cfb5c",
  measurementId: "G-9GLH8HCYG4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);