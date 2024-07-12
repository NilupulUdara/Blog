import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBqWWf0rWkSiRtLfF_-cRGRKoEDqLieoC4",
    authDomain: "blog-c4288.firebaseapp.com",
    projectId: "blog-c4288",
    storageBucket: "blog-c4288.appspot.com",
    messagingSenderId: "849159867013",
    appId: "1:849159867013:web:9a1e69e33636686018f7ec"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();