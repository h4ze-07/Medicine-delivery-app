// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbQCSh1m7Kj-wlbSisOzMX6DMyFlfxwUk",
  authDomain: "medicine-delivery-app-d15b3.firebaseapp.com",
  databaseURL: "https://medicine-delivery-app-d15b3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "medicine-delivery-app-d15b3",
  storageBucket: "medicine-delivery-app-d15b3.appspot.com",
  messagingSenderId: "357325318102",
  appId: "1:357325318102:web:00e0dcf088886337bea677",
  measurementId: "G-GP9ZECDZQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const DB_URL = 'https://medicine-delivery-app-d15b3-default-rtdb.europe-west1.firebasedatabase.app/';