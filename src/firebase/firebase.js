import * as firebase from 'firebase';
import moment from 'moment';
import dummyStore01 from '../tests/fixtures/dummyStore01.js';
// /src/firebase/firebase.js

firebase.initializeApp({
	apiKey:            process.env.FIREBASE_API_KEY,
	authDomain:        process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL:       process.env.FIREBASE_DATABASE_URL,
	projectId:         process.env.FIREBASE_PROJECT_ID,
	storageBucket:     process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
});

const db = firebase.database();

export { firebase, db as default};
