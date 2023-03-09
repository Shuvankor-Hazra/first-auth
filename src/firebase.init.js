import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4E1ZCQMKaaBq0EgWlyw5CQOVmT9xwKgQ",
  authDomain: "first-auth-23abb.firebaseapp.com",
  projectId: "first-auth-23abb",
  storageBucket: "first-auth-23abb.appspot.com",
  messagingSenderId: "934107982525",
  appId: "1:934107982525:web:eb016bfea6091ed1a6a5d4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
