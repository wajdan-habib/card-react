// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWH5xbw5kynHM5DVQtFCG5C01HtNUFy2Y",
  authDomain: "react-6d862.firebaseapp.com",
  projectId: "react-6d862",
  storageBucket: "react-6d862.appspot.com",
  messagingSenderId: "545128772165",
  appId: "1:545128772165:web:abf58b8d77bc000f0fe92c",
  measurementId: "G-1SK3WB38KL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)