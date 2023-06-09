
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyALWS1s2HFE5b048zua_chrfWhcvOUTw1U",
  authDomain: "login-380805.firebaseapp.com",
  projectId: "login-380805",
  storageBucket: "login-380805.appspot.com",
  messagingSenderId: "135975419148",
  appId: "1:135975419148:web:62648d5ca38b64c1f89d29",
  measurementId: "G-6LJBNQ9B5K"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;