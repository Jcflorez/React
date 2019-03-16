import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyA4UA085H_Zj4H79ealqzKsyMQC6125SbM",
    authDomain: "mytodo-fa226.firebaseapp.com",
    databaseURL: "https://mytodo-fa226.firebaseio.com",
    projectId: "mytodo-fa226",
    storageBucket: "mytodo-fa226.appspot.com",
    messagingSenderId: "18598793982"
  }

firebase.initializeApp(config);
export default firebase;
