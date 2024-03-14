import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxqhMv9VcvtVxSjsbhMgKkVS3i35_ZGlk",
    authDomain: "auth-react-44021.firebaseapp.com",
    projectId: "auth-react-44021",
    storageBucket: "auth-react-44021.appspot.com",
    messagingSenderId: "1041608256924",
    appId: "1:1041608256924:web:1141f0c786825879166c59",
    measurementId: "G-DJJ2MV9TJT"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);