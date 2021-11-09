// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDVM6FUItLIetjUSscOV95YkUvrkzk6NXI",
  authDomain: "instagram-v02.firebaseapp.com",
  projectId: "instagram-v02",
  storageBucket: "instagram-v02.appspot.com",
  messagingSenderId: "192396866622",
  appId: "1:192396866622:web:f1fdb5e57db59c56aa4d6f",
  measurementId: "G-LJ727JC0KY"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };