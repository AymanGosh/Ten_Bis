import firebase from "firebase";

const firebaseConfig = {
  apiKey: "*******",
  authDomain: "******.firebaseapp.com",
  projectId: "******",
  storageBucket: "********.appspot.com",
  messagingSenderId: "********",
  appId: "1:*********:web:***********",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
