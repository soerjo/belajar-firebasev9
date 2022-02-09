import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjDU5pvFP00bUerCqHlenu4EVKvAEZSHw",
  authDomain: "belajar-firebase9.firebaseapp.com",
  projectId: "belajar-firebase9",
  storageBucket: "belajar-firebase9.appspot.com",
  messagingSenderId: "515037284448",
  appId: "1:515037284448:web:7b5c36afb9de5070709b05",
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);
