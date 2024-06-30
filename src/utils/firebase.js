// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC32bfC6qToucL5YF7QEgA2laFaICfACbQ",
  authDomain: "netflix-gpt-gzcoder2000.firebaseapp.com",
  projectId: "netflix-gpt-gzcoder2000",
  storageBucket: "netflix-gpt-gzcoder2000.appspot.com",
  messagingSenderId: "332988774527",
  appId: "1:332988774527:web:9d70cc0ce3857413ade74a",
  measurementId: "G-0VLMRJHB38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
