
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAai0lpYyA-4Q8r_vBTTc6vOwk0aStSlgQ",
    authDomain: "practica8-1df6f.firebaseapp.com",
    projectId: "practica8-1df6f",
    storageBucket: "practica8-1df6f.firebasestorage.app",
    messagingSenderId: "669806938050",
    appId: "1:669806938050:web:1a1711955404828e7df85b",
    measurementId: "G-0SFNT272DN"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export { db };