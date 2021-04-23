import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1pBxEJd_Za20mRiZw4moeH4GF1XLR0fo",
  authDomain: "clone-9354b.firebaseapp.com",
  projectId: "clone-9354b",
  storageBucket: "clone-9354b.appspot.com",
  messagingSenderId: "345466625290",
  appId: "1:345466625290:web:fab0bb73cb143f9e24aef3"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };
