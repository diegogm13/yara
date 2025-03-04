
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7JnO31UTnmG_nD7b-knp-jqtfELdJ_7Y",
  authDomain: "yara-70979.firebaseapp.com",
  projectId: "yara-70979",
  storageBucket: "yara-70979.firebasestorage.app",
  messagingSenderId: "1043624290825",
  appId: "1:1043624290825:web:6355641426304c5e21e6d8",
  measurementId: "G-031N3X5CRQ"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export { db };