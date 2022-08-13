// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdXqm5iUQZI6MR7y5mXO7DFBa_3Rj13q8",
  authDomain: "lessemail-marketing.firebaseapp.com",
  projectId: "lessemail-marketing",
  storageBucket: "lessemail-marketing.appspot.com",
  messagingSenderId: "1092226461956",
  appId: "1:1092226461956:web:03bc78b5c7d35ba5592051",
  measurementId: "G-5W63LJE4BV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
