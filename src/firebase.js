import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAIQf378YUdrky5InJ9f4g8lnuaXv280o",
  authDomain: "whatsapp-clone-f64fc.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-f64fc.firebaseio.com",
  projectId: "whatsapp-clone-f64fc",
  storageBucket: "whatsapp-clone-f64fc.appspot.com",
  messagingSenderId: "613865351090",
  appId: "1:613865351090:web:b71942d994665518dbe6ab",
  measurementId: "G-VYNGB670XV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
