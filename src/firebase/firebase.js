import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import config from './config'

const app   = firebase.initializeApp(config);
const db    = app.database();

export { db }