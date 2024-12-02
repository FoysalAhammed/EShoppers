import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_gbtNL2TtM9YXumh5p2e-Xnk4eAcZZsQ",
  authDomain: "shoppingmall-82e2c.firebaseapp.com",
  projectId: "shoppingmall-82e2c",
  storageBucket: "shoppingmall-82e2c.firebasestorage.app",
  messagingSenderId: "1098691039347",
  appId: "1:1098691039347:web:c2d639dc21d0817a5a5a06"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
