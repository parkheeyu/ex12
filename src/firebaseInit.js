// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDurykf64LSTkr9Xt9_ilHate9f7Vzc8Tc",
  authDomain: "react-ex10.firebaseapp.com",
  projectId: "react-ex10",
  storageBucket: "react-ex10.appspot.com",
  messagingSenderId: "342793048436",
  appId: "1:342793048436:web:24e8c30201b02570861c21",
  measurementId: "G-XD8SWE5CDR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);