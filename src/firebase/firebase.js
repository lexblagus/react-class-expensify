import * as firebase from 'firebase';
import moment from 'moment';
import dummyStore01 from '../tests/fixtures/dummyStore01.js';
// /src/firebase/firebase.js

firebase.initializeApp({
	apiKey: "AIzaSyDBgCPrAYjZP730QHEx3inl72wRbldQbpw",
	authDomain: "react-class-expensify.firebaseapp.com",
	databaseURL: "https://react-class-expensify.firebaseio.com",
	projectId: "react-class-expensify",
	storageBucket: "react-class-expensify.appspot.com",
	messagingSenderId: "174116670113"
});

const db = firebase.database();


export { firebase, db as default};
