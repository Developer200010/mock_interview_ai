// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgwm6vWywmi4sr6H443JxwgJXkl4otQg0",
  authDomain: "prepauth-e631a.firebaseapp.com",
  projectId: "prepauth-e631a",
  storageBucket: "prepauth-e631a.firebasestorage.app",
  messagingSenderId: "547301151363",
  appId: "1:547301151363:web:3709139a435a70283101b6",
  measurementId: "G-XQVZZ4V7YX"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);