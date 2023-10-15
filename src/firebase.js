import { initializeApp } from "firebase/app";
// making db
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZDVPWn_71RbgC7YAN0_J17thrkDFT1kY",
  authDomain: "rajnish-portfolio.firebaseapp.com",
  projectId: "rajnish-portfolio",
  storageBucket: "rajnish-portfolio.appspot.com",
  messagingSenderId: "942483572871",
  appId: "1:942483572871:web:65b96220aff36e427a5022"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore()