import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAwt7o10gHbW5hJm3DlcfZ1NlX3oLWUHU0",
  authDomain: "dinamicaesp8266.firebaseapp.com",
  databaseURL: "https://dinamicaesp8266-default-rtdb.firebaseio.com",
  projectId: "dinamicaesp8266",
  storageBucket: "dinamicaesp8266.appspot.com",
  messagingSenderId: "86633681673",
  appId: "1:86633681673:web:923c12a354234edf9339d8",
  measurementId: "G-2C48272XSM",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);