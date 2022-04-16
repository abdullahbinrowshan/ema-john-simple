import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB6YzaAGmqzFoSaKWHk-tj81SzV_lSkCog",
    authDomain: "ema-john-simple-1ced3.firebaseapp.com",
    projectId: "ema-john-simple-1ced3",
    storageBucket: "ema-john-simple-1ced3.appspot.com",
    messagingSenderId: "514968962648",
    appId: "1:514968962648:web:4477356da67462fec9ac2d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;