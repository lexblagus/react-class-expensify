import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDBgCPrAYjZP730QHEx3inl72wRbldQbpw",
	authDomain: "react-class-expensify.firebaseapp.com",
	databaseURL: "https://react-class-expensify.firebaseio.com",
	projectId: "react-class-expensify",
	storageBucket: "react-class-expensify.appspot.com",
	messagingSenderId: "174116670113"
};

firebase.initializeApp(config);

const db = firebase.database();

console.warn('Saving data...')


const beg = 5000;
const nxt = beg;
let itv = beg;


setTimeout(()=>{
	console.log('Initial data');
	db.ref().set({
		a: {
			b: 4,
			g: ['a','b']
		},
	}).then(()=>{
		console.warn('data saved');
	}).catch((err)=>{
		console.warn('error saving:', err);
	});
},itv+=nxt);


setTimeout(()=>{
	console.log('Update data');
	db.ref('a/b').set({
		c: {
			d: 5,
			e: 6
		},
		f: true
	}).then(()=>{
		console.warn('data updated');
	}).catch((err)=>{
		console.warn('error updating:', err);
	});
},itv+=nxt);


setTimeout(()=>{
	console.log('Update-remove data');
	db.ref('a/b/c/e').set(null).then(()=>{
		console.warn('data updated-removed');
	}).catch((err)=>{
		console.warn('error updatingremoving:', err);
	});
},itv+=nxt);


setTimeout(()=>{
	console.log('Remove data');
	db.ref('a/b/c/d').remove().then(()=>{
		console.warn('data removed');
	}).catch((err)=>{
		console.warn('error updating:', err);
	});
},itv+=nxt);





	//db.ref().set('Uat?')





