import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyA5eXtEBHITImTMdqOk-HQDECU54OHxSus",
  authDomain: "fir-3a4d3.firebaseapp.com",
  projectId: "fir-3a4d3",
  storageBucket: "fir-3a4d3.appspot.com",
  messagingSenderId: "308869163806",
  appId: "1:308869163806:web:3a15562046a1d6d34a370f",
  measurementId: "G-V1793NSZ3H"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
