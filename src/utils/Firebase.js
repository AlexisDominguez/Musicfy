import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD2Ba8Fu_YhKuXzPvS1sDY5DW98ozIZdaU",
  authDomain: "musicfy-20983.firebaseapp.com",
  databaseURL: "https://musicfy-20983.firebaseio.com",
  projectId: "musicfy-20983",
  storageBucket: "musicfy-20983.appspot.com",
  messagingSenderId: "34468206628",
  appId: "1:34468206628:web:2dcd471ce3d57701e260b1"
};

export default firebase.initializeApp(firebaseConfig);
