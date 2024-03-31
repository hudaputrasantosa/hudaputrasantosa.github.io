// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const apiKey = import.meta.env.REACT_APP_API_KEY;
// const authDomain = import.meta.env.REACT_APP_AUTH_DOMAIN;
// const projectId = import.meta.env.REACT_APP_PROJECT_ID;
// const storageBucket = import.meta.env.REACT_APP_STORAGE_BUCKET;
// const messagingSenderId = import.meta.env.REACT_APP_MESSAGE_SENDER_ID;
// const appId = import.meta.env.REACT_APP_ID;
// const measurementId = import.meta.env.REACT_APP_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: "AIzaSyAkC1sjCaxombGRV69tK7SorH2vI08memw",
  authDomain: "counter-page-6279b.firebaseapp.com",
  projectId: "counter-page-6279b",
  storageBucket: "counter-page-6279b.appspot.com",
  messagingSenderId: "761417323989",
  appId: "1:761417323989:web:b781e8fb4e6b49156c595c",
  measurementId: "G-5CDK9SRB5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default db;
