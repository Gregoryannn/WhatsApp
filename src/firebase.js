import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCNW_XzB5A7-oSAxokXUWXHJfCDIAfqmu0",
    authDomain: "whatsapp-clone-28532.firebaseapp.com",
    projectId: "whatsapp-clone-28532",
    storageBucket: "whatsapp-clone-28532.appspot.com",
    messagingSenderId: "68843801645",
    appId: "1:68843801645:web:9288e6710b5a2fc5d4fca4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;