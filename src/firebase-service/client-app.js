import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";
import "firebase/analytics";
import "firebase/performance";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
  // Check that `window` is in scope for the analytics module!
  if (typeof window !== "undefined") {
    // Enable analytics. https://firebase.google.com/docs/analytics/get-started
    if ("measurementId" in clientCredentials) {
      firebase.analytics();
      firebase.performance();
    }
  }
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export default firebase;
