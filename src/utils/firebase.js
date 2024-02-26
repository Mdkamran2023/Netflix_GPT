// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-y3bTwOt_3ViFlh_au8F_SWG5l97sX44",
  authDomain: "netflixgpt-9484f.firebaseapp.com",
  projectId: "netflixgpt-9484f",
  storageBucket: "netflixgpt-9484f.appspot.com",
  messagingSenderId: "884534136756",
  appId: "1:884534136756:web:6fa52610b2f9853614ace1",
  measurementId: "G-MV2PP8DJMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();