// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkbZNcujI4oyruZ9MoIc2vhFuEAjnKi7A",
  authDomain: "taskmanagerapp-54ddf.firebaseapp.com",
  projectId: "taskmanagerapp-54ddf",
  storageBucket: "taskmanagerapp-54ddf.firebasestorage.app",
  messagingSenderId: "388641578180",
  appId: "1:388641578180:web:5b889cff8d5e2df95b7d91",
  measurementId: "G-NVGRLBJY1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
