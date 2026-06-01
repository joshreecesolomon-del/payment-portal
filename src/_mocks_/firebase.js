import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2QZ7lrTEXMfzz-r97PlrXC3TeMny0Ahw",
  authDomain: "payment-portal-9bfc6.firebaseapp.com",
  projectId: "payment-portal-9bfc6",
  storageBucket: "payment-portal-9bfc6.firebasestorage.app",
  messagingSenderId: "579145013574",
  appId: "1:579145013574:web:db63a2ffc9ab5f67112d47"
};

// 🔥 IMPORTANT: initialize FIRST
const app = initializeApp(firebaseConfig);

// 🔐 exports
export const auth = getAuth(app);
export const db = getFirestore(app);