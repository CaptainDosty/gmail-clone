import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCatojxhgOYaziqONV3dgWMemlFh6tg2BU",
  authDomain: "clone-330cb.firebaseapp.com",
  databaseURL: "https://clone-330cb-default-rtdb.firebaseio.com",
  projectId: "clone-330cb",
  storageBucket: "clone-330cb.appspot.com",
  messagingSenderId: "761147879601",
  appId: "1:761147879601:web:50b35cd9465e9262623290",
  measurementId: "G-SB24KMVB5J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };