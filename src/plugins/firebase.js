import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAQWlDU3BAaTiigSfbZ7bhXnCuX5wPYMUo",
  authDomain: "",
  databaseURL: "",
  projectId: "portfolio-hironari-saito-2019",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);
export const functions = firebase.functions();
