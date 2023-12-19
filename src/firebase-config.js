import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBAAG6VMlngS2BXGbXwoceeLoZfGFIxjXk",
  authDomain: "sih-1369.firebaseapp.com",
  projectId: "sih-1369",
  storageBucket: "sih-1369.appspot.com",
  messagingSenderId: "781582329970",
  appId: "1:781582329970:web:0bc58b0b56067c040b3aeb",
  measurementId: "G-3X5QNMKY3Z"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);