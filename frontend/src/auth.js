
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC2eQsbD7dmrceB_WEV0X0uIxAPOmOceZY",
  authDomain: "react-book-store-ca69f.firebaseapp.com",
  projectId: "react-book-store-ca69f",
  storageBucket: "react-book-store-ca69f.appspot.com",
  messagingSenderId: "38084631033",
  appId: "1:38084631033:web:c5e9a51aad7b794d614528",
  measurementId: "G-J6TR1QC3HL",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
