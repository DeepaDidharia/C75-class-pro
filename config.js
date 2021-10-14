import * as firebase from "firebase";
require("@firebase/firestore");


  const firebaseConfig = {
    apiKey: "AIzaSyCCUhWHVibxK3j2XphnIxDNPNiGp3cef0U",
  authDomain: "wily-df6fa.firebaseapp.com",
  databaseURL: "https://wily-df6fa-default-rtdb.firebaseio.com",
  projectId: "wily-df6fa",
  storageBucket: "wily-df6fa.appspot.com",
  messagingSenderId: "214458811900",
  appId: "1:214458811900:web:a4548e72503549a3de9e79"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
