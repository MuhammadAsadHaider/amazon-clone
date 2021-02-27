import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDuSmahIVaj2ajUoZO6ZsAQDBlp3TMdyDM",
    authDomain: "clone-f7a57.firebaseapp.com",
    projectId: "clone-f7a57",
    storageBucket: "clone-f7a57.appspot.com",
    messagingSenderId: "399513533213",
    appId: "1:399513533213:web:855226c4e6e08220e6fff4",
    measurementId: "G-NKYZ2D7YXM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };