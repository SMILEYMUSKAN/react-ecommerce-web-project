// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo6fevBrzwj0xJPxk7UjHH97FsNzyga_U",
  authDomain: "react-ecommerce-web-project.firebaseapp.com",
  projectId: "react-ecommerce-web-project",
  storageBucket: "react-ecommerce-web-project.appspot.com",
  messagingSenderId: "1027463741322",
  appId: "1:1027463741322:web:ffb18351a99cabe86fd273"
};


console.log(":: I am in Firebase App File ::");

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
