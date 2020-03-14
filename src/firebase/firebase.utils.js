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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
