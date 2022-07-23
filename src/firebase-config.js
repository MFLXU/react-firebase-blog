// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy_f_QqPdE4lE8rkO5gg5KhPaQFRC926k",
  authDomain: "blog-project-147a8.firebaseapp.com",
  projectId: "blog-project-147a8",
  storageBucket: "blog-project-147a8.appspot.com",
  messagingSenderId: "214884506005",
  appId: "1:214884506005:web:a83eef93a776240eb7fe9c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
