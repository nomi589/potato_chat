import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqVJw0XN9lP2gi8UNek66KI2Zyccmm-8M",
  authDomain: "potato-chat-32218.firebaseapp.com",
  projectId: "potato-chat-32218",
  storageBucket: "potato-chat-32218.appspot.com",
  messagingSenderId: "850911765249",
  appId: "1:850911765249:web:64d10fef983a96ccc1b100",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
