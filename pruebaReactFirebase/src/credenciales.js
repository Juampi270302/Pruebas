// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7vJVy62Hb0yuqZoIPzqdXZDRmU8G-W_s",
    authDomain: "tango-app-grupo10.firebaseapp.com",
    projectId: "tango-app-grupo10",
    storageBucket: "tango-app-grupo10.appspot.com",
    messagingSenderId: "228852715455",
    appId: "1:228852715455:web:5604afb7b5a6ea134a5b0a",
    measurementId: "G-7S12J13Y9C"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;