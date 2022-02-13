// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaY1PwQiYv8xtzUa1jIfaRH7p6-74lJyk",
  authDomain: "vibstagram-5302a.firebaseapp.com",
  projectId: "vibstagram-5302a",
  storageBucket: "vibstagram-5302a.appspot.com",
  messagingSenderId: "201043212684",
  appId: "1:201043212684:web:d422fa14ad0b9b26b0fea9",
  measurementId: "G-S8EG8F0S3R"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
