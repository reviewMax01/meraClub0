import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmtcEJn9W_q7o3YIeLlvJ-Pz9SgrFidGs",
  authDomain: "meraclub-f2ec6.firebaseapp.com",
  projectId: "meraclub-f2ec6",
  storageBucket: "meraclub-f2ec6.firebasestorage.app",
  messagingSenderId: "1071414277245",
  appId: "1:1071414277245:web:3dd69ddfd9f27e65c52d14",
  measurementId: "G-4W95YKELDC"
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();