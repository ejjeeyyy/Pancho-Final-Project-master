import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

import { getAuth } from 'firebase/auth'
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB7IEv5AZtWqSr7eJ6UZkTHHgle1Axalu4",
    authDomain: "vuex-34b8d.firebaseapp.com",
    databaseURL: "https://vuex-34b8d-default-rtdb.firebaseio.com",
    projectId: "vuex-34b8d",
    storageBucket: "vuex-34b8d.appspot.com",
    messagingSenderId: "62786871467",
    appId: "1:62786871467:web:ce78e9933e5cb19b68d7ee",
    measurementId: "G-H4MM9PH9CN"
  };

const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = getAuth();

export { app, auth, database }