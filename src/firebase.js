// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFkKifThc69b4oZ6o8mQT_fDO1pu2OH9c",
  authDomain: "campusride1-f1aa1.firebaseapp.com",
  projectId: "campusride1-f1aa1",
  storageBucket: "campusride1-f1aa1.firebasestorage.app",
  messagingSenderId: "286256786196",
  appId: "1:286256786196:web:bcbb043f8494204a7f3001",
  measurementId: "G-2K1X6VRV3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };