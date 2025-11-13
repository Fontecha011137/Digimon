// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDHo-BYgHn3iTXe9rn4jYvV6E1HgaahH_Q",
  authDomain: "digimon-eeb66.firebaseapp.com",
  projectId: "digimon-eeb66",
  storageBucket: "digimon-eeb66.firebasestorage.app",
  messagingSenderId: "428178970341",
  appId: "1:428178970341:web:31d1340620d47b91aaa60c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
