// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASI4XdxGRrRGJGrQ9RtYfNWxoST04x3Zk",
  authDomain: "netflix-clone-52859.firebaseapp.com",
  projectId: "netflix-clone-52859",
  storageBucket: "netflix-clone-52859.firebasestorage.app",
  messagingSenderId: "596761851535",
  appId: "1:596761851535:web:80481fadd3f96d472162fa",
  measurementId: "G-6QRXJK96KF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth=getAuth(app);