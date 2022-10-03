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
  apiKey: "AIzaSyCXdRw-CQfImWc9VGp8tPFPm_1oNo8A7Hk",
  authDomain: "blog-firebase-11740.firebaseapp.com",
  projectId: "blog-firebase-11740",
  storageBucket: "blog-firebase-11740.appspot.com",
  messagingSenderId: "976048711448",
  appId: "1:976048711448:web:966e1999870f4cd081e06d",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
