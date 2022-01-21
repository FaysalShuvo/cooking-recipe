import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8GbWCVttSYjJpIoy8k1v1a4kktL8dyVA",
  authDomain: "cooking-recipe-766d4.firebaseapp.com",
  projectId: "cooking-recipe-766d4",
  storageBucket: "cooking-recipe-766d4.appspot.com",
  messagingSenderId: "837272809516",
  appId: "1:837272809516:web:62b0073326550773482189",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
