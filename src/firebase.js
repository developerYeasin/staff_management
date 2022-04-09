import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJMhaucAr1B1vde-TGa8xXF8KLjYHviyM",
  authDomain: "staff-management-yeasin.firebaseapp.com",
  projectId: "staff-management-yeasin",
  storageBucket: "staff-management-yeasin.appspot.com",
  messagingSenderId: "75413624969",
  appId: "1:75413624969:web:82697ea4615b571470ce58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


 