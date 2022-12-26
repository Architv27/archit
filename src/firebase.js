// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhYtccMAXsInkiY2torKZBZLOOSiMOsPE",
  authDomain: "archit-verma.firebaseapp.com",
  projectId: "archit-verma",
  storageBucket: "archit-verma.appspot.com",
  messagingSenderId: "544787683349",
  appId: "1:544787683349:web:d3525acd7f652632ce561c",
  measurementId: "G-ZRG4F1YKJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);