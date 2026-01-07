import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBK6pGNnwMtsk24m19qVDweDnVQo9WYm9o",
  authDomain: "discord-clone-a1eee.firebaseapp.com",
  projectId: "discord-clone-a1eee",
  storageBucket: "discord-clone-a1eee.firebasestorage.app",
  messagingSenderId: "120076068210",
  appId: "1:120076068210:web:5ab024be6b6dbfcc4069eb",
  measurementId: "G-TEH7KSTSR7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };