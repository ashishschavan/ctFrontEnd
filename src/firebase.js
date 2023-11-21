// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnq4cBDcNlBb-OJ1rAmvEaX-0yvOVI-pw",
  authDomain: "ctfrontend-20c64.firebaseapp.com",
  projectId: "ctfrontend-20c64",
  storageBucket: "ctfrontend-20c64.appspot.com",
  messagingSenderId: "939223067998",
  appId: "1:939223067998:web:49ea1b46dfa566ea0ff3cf",
  measurementId: "G-SK9PDY6FNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);