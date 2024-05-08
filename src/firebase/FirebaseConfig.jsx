// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKyZNdgwzr3Uh2Op8VmrrJfHv187_rx0s",
    authDomain: "e-libreria-46b75.firebaseapp.com",
    projectId: "e-libreria-46b75",
    storageBucket: "e-libreria-46b75.appspot.com",
    messagingSenderId: "884302203405",
    appId: "1:884302203405:web:0f0c3557f714c0b99f2344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }