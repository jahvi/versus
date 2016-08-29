import Firebase from 'firebase';
import config from '../config/firebase';

const firebaseApp = Firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();
const firebaseDatabase = firebaseApp.database();

export { firebaseApp, firebaseAuth, firebaseDatabase };
