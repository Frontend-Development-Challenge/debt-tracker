// Import all the neccessary SDK needed
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhj-p6Ua18KWX-T3b2rFxhaMBhFdJTNlA",
    authDomain: "debt-tracker-3988d.firebaseapp.com",
    projectId: "debt-tracker-3988d",
    storageBucket: "debt-tracker-3988d.appspot.com",
    messagingSenderId: "670592836483",
    appId: "1:670592836483:web:0b49225a78934a94790cb6",
    measurementId: "G-XT97QSV32L"
  };

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  export default app;
