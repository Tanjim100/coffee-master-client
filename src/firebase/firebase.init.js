// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCPmdn_6Cu-YbuccfDjc07h5BV_HVJNv4M",
  // authDomain: "coffee-master-ddd06.firebaseapp.com",
  // projectId: "coffee-master-ddd06",
  // storageBucket: "coffee-master-ddd06.firebasestorage.app",
  // messagingSenderId: "1039602428263",
  // appId: "1:1039602428263:web:7ce427a624e7051843e7c2"
  apiKey: "AIzaSyCPmdn_6Cu-YbuccfDjc07h5BV_HVJNv4M",
  authDomain: "coffee-master-ddd06.firebaseapp.com",
  projectId: "coffee-master-ddd06",
  storageBucket: "coffee-master-ddd06.firebasestorage.app",
  messagingSenderId: "1039602428263",
  appId: "1:1039602428263:web:7ce427a624e7051843e7c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);