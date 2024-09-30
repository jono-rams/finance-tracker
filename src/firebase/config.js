import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
  projectId: "YOUR_FIREBASE_PROJECT_ID",
  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "YOUR_FIREBASE_MESSAGE_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID",
};

// init firebase
const app = initializeApp(firebaseConfig);

// init services
const firebaseAuth = getAuth(app);
const firestoreDatabase = getFirestore(app);

// export services
export { firebaseAuth, firestoreDatabase };