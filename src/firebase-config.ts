// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics , logEvent, type  Analytics} from "firebase/analytics";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";

const process = import.meta.env;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.VITE_FIREBASE_API_KEY,
  authDomain: process.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: process.VITE_FIREBASE_APPID,
  measurementId: process.VITE_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Analytics (브라우저 환경에서만 동작)
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const db = getFirestore(app);

export {app,logEvent,analytics,db,collection,addDoc, onSnapshot}; 