import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



firebase.initializeApp({
    apiKey: "AIzaSyB9EUUB705RZeV1luIZ7fs21yUdI5S4U74",
    authDomain: "flexchat-360b1.firebaseapp.com",
    projectId: "flexchat-360b1",
    storageBucket: "flexchat-360b1.appspot.com",
    messagingSenderId: "866206590960",
    appId: "1:866206590960:web:b22256a5c9ccdf15379f35"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

export default firebase;
export { auth, firestore };