import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import * as firebase_config from '../config/firebase_config';

const config = {
    apiKey: firebase_config.REACT_APP_FIREBASE_KEY,
    authDomain: firebase_config.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: firebase_config.REACT_APP_FIREBASE_DATABASE,
    projectId: firebase_config.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: firebase_config.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: firebase_config.REACT_APP_FIREBASE_SENDER_ID
};

const app   = firebase.initializeApp(config);
const db    = firebase.database();

export { db, app }