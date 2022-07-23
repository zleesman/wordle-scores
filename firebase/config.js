// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const val = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const firebaseConfig = {
  apiKey: val,
  authDomain: "wordle-scores-ba7ab.firebaseapp.com",
  projectId: "wordle-scores-ba7ab",
  storageBucket: "wordle-scores-ba7ab.appspot.com",
  messagingSenderId: "419216718574",
  appId: "1:419216718574:web:4d746ead7aa9d64e7a91ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;

      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      // ...
    });
};
export const userSignOut = () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
};
