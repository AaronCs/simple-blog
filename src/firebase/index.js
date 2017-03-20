/* eslint quotes: off, no-console: off*/
import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyATgmgEVPbN84uB3mVEkfi-5o2MuzaBnhI",
  authDomain: "react-firebase-test-1aa09.firebaseapp.com",
  databaseURL: "https://react-firebase-test-1aa09.firebaseio.com",
  storageBucket: "react-firebase-test-1aa09.appspot.com",
  messagingSenderId: "978277516765"
};

firebase.initializeApp(config);
const database = firebase.database();
export const authProvider = new firebase.auth.GoogleAuthProvider(); // Sign in with Google
export default database;
