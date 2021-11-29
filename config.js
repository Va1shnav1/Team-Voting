import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAHfifA-CdNyPo9txa5yRS_64CcM1vLwMs",
  authDomain: "project-67-7edce.firebaseapp.com",
  projectId: "project-67-7edce",
  storageBucket: "project-67-7edce.appspot.com",
  messagingSenderId: "838133154040",
  appId: "1:838133154040:web:71836cc1aed0deb0e03b0d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();