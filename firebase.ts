// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmHmi0jkRP7vUKELwLGfV1vCnn3aHbOiI",
  authDomain: "chatterly-app-3e649.firebaseapp.com",
  projectId: "chatterly-app-3e649",
  storageBucket: "chatterly-app-3e649.firebasestorage.app",
  messagingSenderId: "775396834101",
  appId: "1:775396834101:web:8c16a9296adc9ad8a2aa7c",
  measurementId: "G-4H37XMTHWL",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth,db,analytics}
