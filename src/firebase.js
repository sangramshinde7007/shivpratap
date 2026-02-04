// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase, ref, set, get, child } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyAsMR7FW8boGygnRABrpo5TJudGVcPSEcQ",
//   authDomain: "imprint24-c0c86.firebaseapp.com",
//   databaseURL: "https://imprint24-c0c86-default-rtdb.firebaseio.com",
//   projectId: "imprint24-c0c86",
//   storageBucket: "imprint24-c0c86.firebasestorage.app",
//   messagingSenderId: "1060919076727",
//   appId: "1:1060919076727:web:5cec808c59729ae36ce372",
//   measurementId: "G-XD5W4MFFNC"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const database = getDatabase(app);

// export { auth, database, signInWithEmailAndPassword, createUserWithEmailAndPassword, ref, set, get, child };





// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,                    // ← Added this (fixes your error)
} from "firebase/auth";

import {
  getDatabase,
  ref,
  set,
  get,
  child,
  push,
  remove,
} from "firebase/database";

import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

// ────────────────────────────────────────────────
const firebaseConfig = {
  apiKey:            "AIzaSyAsMR7FW8boGygnRABrpo5TJudGVcPSEcQ",
  authDomain:        "imprint24-c0c86.firebaseapp.com",
  databaseURL:       "https://imprint24-c0c86-default-rtdb.firebaseio.com",
  projectId:         "imprint24-c0c86",
  storageBucket:     "imprint24-c0c86.firebasestorage.app",
  messagingSenderId: "1060919076727",
  appId:             "1:1060919076727:web:5cec808c59729ae36ce372",
  measurementId:     "G-XD5W4MFFNC"
};

// ────────────────────────────────────────────────
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth     = getAuth(app);
const database = getDatabase(app);
const storage  = getStorage(app);

// ────────────────────────────────────────────────
// Named exports (everything your components need)
export {
  app,                        // useful sometimes (e.g. for other services)
  auth,
  database,
  storage,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,                    // now available → fixes Login.js error
  ref,
  set,
  get,
  child,
  push,
  remove,
  storageRef,
  uploadBytes,
  getDownloadURL,
  deleteObject,
};