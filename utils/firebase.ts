// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-dCboub5fLXi7iE7Kmn2qO7sEPOmikGE",
  authDomain: "rima-fb9a0.firebaseapp.com",
  projectId: "rima-fb9a0",
  storageBucket: "rima-fb9a0.firebasestorage.app",
  messagingSenderId: "295720818699",
  appId: "1:295720818699:web:2e748327ed6b44ddcd8f0e",
  measurementId: "G-5291NTQ7JX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

