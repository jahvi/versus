import Firebase from 'firebase';
import config from '../config/firebase';

const firebaseApp = Firebase.initializeApp(config);
const firebaseAuth = firebaseApp.auth();

export { firebaseApp, firebaseAuth };
