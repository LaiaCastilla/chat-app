// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaeoeGYo6qLG4a73AqazHyvq5sS_VBJmE",
  authDomain: "react-chatlaia.firebaseapp.com",
  projectId: "react-chatlaia",
  storageBucket: "react-chatlaia.appspot.com",
  messagingSenderId: "771327610929",
  appId: "1:771327610929:web:872f2ba9a9336be32ec510",
  measurementId: "G-VCFBF43DV2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
