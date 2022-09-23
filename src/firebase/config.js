import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBl2flQx7fd-N9vO8oE8tQ7yBvh9TYRXxY",
  authDomain: "miniblog-9d9b1.firebaseapp.com",
  projectId: "miniblog-9d9b1",
  storageBucket: "miniblog-9d9b1.appspot.com",
  messagingSenderId: "367900833131",
  appId: "1:367900833131:web:f60e9a5939c5fe8798c82e"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };