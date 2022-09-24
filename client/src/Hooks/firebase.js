// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsewCVkRviznulCO-GKLG0hCmSFRutpNU",
  authDomain: "codex-e12ab.firebaseapp.com",
  projectId: "codex-e12ab",
  storageBucket: "codex-e12ab.appspot.com",
  messagingSenderId: "709861534903",
  appId: "1:709861534903:web:c446a55ea3ee16d4873132",
  measurementId: "G-7DKWBQP9X0",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
