import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHg5LKDlvNdDDLJeD2JjPMGwvOq-sXfRc",
  authDomain: "cryptoquiz-ec5cd.firebaseapp.com",
  projectId: "cryptoquiz-ec5cd",
  storageBucket: "cryptoquiz-ec5cd.firebasestorage.app",
  messagingSenderId: "659892329148",
  appId: "1:659892329148:web:a8ac746eac8a70cee20eb9",
  measurementId: "G-Y211SYSS70"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
