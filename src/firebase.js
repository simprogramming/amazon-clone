import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-49yxgtsIS6-X_gzdwjQ2yHQplrN0OPA",
  authDomain: "clone-e4307.firebaseapp.com",
  databaseURL: "https://clone-e4307.firebaseio.com",
  projectId: "clone-e4307",
  storageBucket: "clone-e4307.appspot.com",
  messagingSenderId: "747850688620",
  appId: "1:747850688620:web:5faecf4d722da6c82f5049",
  measurementId: "G-CP2XBM9WH1"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }
