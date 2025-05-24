import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// ✅ Fixed configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwuXgxXiG6ZTzgm7RrF8vsI5e6gpHNfSg",
  authDomain: "uttam-tea-website.firebaseapp.com",
  projectId: "uttam-tea-website",
  storageBucket: "uttam-tea-website.appspot.com", // ✅ Fixed this line
  messagingSenderId: "798664025942",
  appId: "1:798664025942:web:b2dd97aef4663403c3d8f7",
  measurementId: "G-CGRXE3E99H",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
