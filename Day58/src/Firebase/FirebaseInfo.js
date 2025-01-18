import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1Lj0Ler2jVFQupPTokVyg6j1xDZG1uqw",
  authDomain: "day58-b7cbb.firebaseapp.com",
  projectId: "day58-b7cbb",
  storageBucket: "day58-b7cbb.firebasestorage.app",
  messagingSenderId: "49936459933",
  appId: "1:49936459933:web:d3162fc3c20c29d0d14c74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)