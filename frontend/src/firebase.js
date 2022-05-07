// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithRedirect } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBe4a3Lk8xZqxg8bKyeGOgNLpFBhHncRDc",
  authDomain: "adidas-clone.firebaseapp.com",
  projectId: "adidas-clone",
  storageBucket: "adidas-clone.appspot.com",
  messagingSenderId: "861426933812",
  appId: "1:861426933812:web:fcc85eaba7cb9f77d5ea61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider = new GoogleAuthProvider(app);
export {app,auth,provider}