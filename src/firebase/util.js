import firebase from "firebase/app";

import "firebase/firebase-firestore";
import "firebase/firebase-auth";

const config = {
  apiKey: "AIzaSyCstYHSChhO7HqLJ0V0ZU8oNR6BKrcCfVM",
  authDomain: "crwn-clothing-6b7f7.firebaseapp.com",
  databaseURL: "https://crwn-clothing-6b7f7.firebaseio.com",
  projectId: "crwn-clothing-6b7f7",
  storageBucket: "crwn-clothing-6b7f7.appspot.com",
  messagingSenderId: "763941216716",
  appId: "1:763941216716:web:eccc5c3a3a938f87423d69",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName: displayName === null ? additionalData : displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.error(error);
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