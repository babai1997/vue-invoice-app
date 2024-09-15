// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1eb7QMnO9Itp2jh8fZcQNjUpwN8VoNpM",
  authDomain: "vue-invoice-app-434b6.firebaseapp.com",
  projectId: "vue-invoice-app-434b6",
  storageBucket: "vue-invoice-app-434b6.appspot.com",
  messagingSenderId: "989097792977",
  appId: "1:989097792977:web:4e1240539451a1f9307cf0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export default db;
