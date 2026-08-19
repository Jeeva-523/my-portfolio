// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh6lMbbzID2BYBBnT848rErh_rS6SCZqs",
  authDomain: "portfolio-523.firebaseapp.com",
  projectId: "portfolio-523",
  storageBucket: "portfolio-523.firebasestorage.app",
  messagingSenderId: "938535776256",
  appId: "1:938535776256:web:8fb184c3d580e64e2c28e5",
  measurementId: "G-GX1BW8WEGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, analytics, db, auth, storage };
