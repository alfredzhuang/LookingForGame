import firebase from 'firebase';
import "firebase/firestore";

// let firebaseConfig = {
//     apiKey: process.env.FIREBASE_KEY,
//     authDomain: process.env.FIREBASE_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID,
// };

var firebaseConfig = {
    apiKey: "AIzaSyC9-PsfZcG5Ul5gjSkUzkIZnABd3bI19VI",
    authDomain: "lookingforgroup-40a98.firebaseapp.com",
    databaseURL: "https://lookingforgroup-40a98.firebaseio.com",
    projectId: "lookingforgroup-40a98",
    storageBucket: "lookingforgroup-40a98.appspot.com",
    messagingSenderId: "323159686971",
    appId: "1:323159686971:web:640ea5917b9736bd6f411e"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;