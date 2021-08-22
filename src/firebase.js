import firebase from "firebase";
import 'firebase/firebase-messaging';

var firebaseConfig = {
  apiKey: "AIzaSyDIDwpGU5U9TgQUAjamGn9xrjD7GWihzQE",
  authDomain: "edis-7dc25.firebaseapp.com",
  databaseURL: "https://edis-7dc25.firebaseio.com",
  projectId: "edis-7dc25",
  storageBucket: "edis-7dc25.appspot.com",
  messagingSenderId: "697089033419",
  appId: "1:697089033419:web:1990b16eaef33717cfc74e",
  measurementId: "G-3Z8MYBGKZV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const msg = firebase.messaging();

export { msg };