import auth from '@react-native-firebase/auth';
import { initializeApp } from '@react-native-firebase/app';
import { getAnalytics } from 'firebase/analytics';
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqIjg5_escP2khjuPfyl8rvFU7aXIRHTQ",
  authDomain: "note-843ea.firebaseapp.com",
  projectId: "note-843ea",
  storageBucket: "note-843ea.appspot.com",
  messagingSenderId: "120699458489",
  appId: "1:120699458489:android:79d1fbe69fcad0a3319c68",
//   measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const firestore = getFirestore(app);

export { app, auth };