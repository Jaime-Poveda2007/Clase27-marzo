import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9L0mZ_sXRUAtBj1f01LHNuM8RC5_hoMI",
  authDomain: "individualapi-1db1b.firebaseapp.com",
  projectId: "individualapi-1db1b",
  storageBucket: "individualapi-1db1b.firebasestorage.app",
  messagingSenderId: "967070280743",
  appId: "1:967070280743:web:eb02f46dc6de081b7b3202",
  measurementId: "G-PMCHYQ0LRY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);