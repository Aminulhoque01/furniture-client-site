// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_appId,
  appId: process.env.REACT_APP_imbb_key,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;


// const firebaseConfig = {
//   apiKey: "AIzaSyCcHFCHWUoJapZ28xQ_lCaDt2-jpmPvmXY",
//   authDomain: "resale-e20b3.firebaseapp.com",
//   projectId: "resale-e20b3",
//   storageBucket: "resale-e20b3.appspot.com",
//   messagingSenderId: "586382494112",
//   appId: "1:586382494112:web:332b1dff21b33d02e9fcc5"
// }