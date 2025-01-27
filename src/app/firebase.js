import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBGmvkRN4iFtDH1qcZfpUI7OsNI2FsD3Is",
    authDomain: "trialsys.firebaseapp.com",
    projectId: "trialsys",
    storageBucket: "trialsys.appspot.com",
    messagingSenderId: "165170725706",
    appId: "1:165170725706:web:63fe0a18851ac8e312b7b3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage
const googleAuthProvider = new GoogleAuthProvider();

export { auth, db, storage, googleAuthProvider };








// import { initializeApp, getApps, getApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBGmvkRN4iFtDH1qcZfpUI7OsNI2FsD3Is",
//     authDomain: "trialsys.firebaseapp.com",
//     projectId: "trialsys",
//     storageBucket: "trialsys.appspot.com",
//     messagingSenderId: "165170725706",
//     appId: "1:165170725706:web:63fe0a18851ac8e312b7b3"
//   };

//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const db = getFirestore(app);

//   export { auth, db };