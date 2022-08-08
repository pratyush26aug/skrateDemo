// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIs_xnvjw06WjCR5ej34I9XPGTLXn015Q",
  authDomain: "skrate-auth-edbc4.firebaseapp.com",
  projectId: "skrate-auth-edbc4",
  storageBucket: "skrate-auth-edbc4.appspot.com",
  messagingSenderId: "1068579638108",
  appId: "1:1068579638108:web:b75e7134b79e4dcc394f99"
};

// Initialize Firebase
const initializeFirebaseApp = () => initializeApp(firebaseConfig);

export default initializeFirebaseApp