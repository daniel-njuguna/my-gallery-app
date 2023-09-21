// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your-API-Key",
  authDomain: "Your-Auth-Domain",
  projectId: "Your-Project-ID",
  storageBucket: "Your-Storage-Bucket",
  messagingSenderId: "Your-Messaging-Sender-ID",
  appId: "Your-App-ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { firebaseConfig, auth };
