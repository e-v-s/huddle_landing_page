import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB0L-k94KVtmYTrSjphBl35IFcpIuijFxU",
    authDomain: "huddle-e2c19.firebaseapp.com",
    databaseURL: "https://huddle-e2c19-default-rtdb.firebaseio.com",
    projectId: "huddle-e2c19",
    storageBucket: "huddle-e2c19.appspot.com",
    messagingSenderId: "1045595688995",
    appId: "1:1045595688995:web:0f7c6f9ecdddcc9e73e196"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics();
export default firebase

