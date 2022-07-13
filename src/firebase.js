// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtaL6fxNrrRa8hseubIhsYGWr2zXI37RQ",
  authDomain: "whole-5f04a.firebaseapp.com",
  projectId: "whole-5f04a",
  storageBucket: "whole-5f04a.appspot.com",
  messagingSenderId: "193081715192",
  appId: "1:193081715192:web:b729a553e44c5afcf38e0d",
  measurementId: "G-RTXFS73J44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);