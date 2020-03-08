import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDCLEFxMtrqkPmmxLVQVNCtlZXdSH2x0mc",
  authDomain: "crown-db-ca5fc.firebaseapp.com",
  databaseURL: "https://crown-db-ca5fc.firebaseio.com",
  projectId: "crown-db-ca5fc",
  storageBucket: "crown-db-ca5fc.appspot.com",
  messagingSenderId: "374233172767",
  appId: "1:374233172767:web:59d22372a35d6beefcbe2a",
  measurementId: "G-XTTRJENL82"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
