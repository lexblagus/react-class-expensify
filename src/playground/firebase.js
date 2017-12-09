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

console.log('Data tests');

const queue = [
	0, // master switch
	 
	0, // Initial data
	0, // Update data
	0, // Update-remove data and root subscription
	0, // Current db state and A subscription
	0, // Remove data
	0, // wipe data

	0, // format expenses and dummy data
	0, // Current db state
];
const between = 2000;
let initialAcc = 10 - between; // initial delay
let idx=0;

const alg = () => (initialAcc + ((idx-1) * between));

if(queue[idx++]){
	if(queue[idx++]){
		setTimeout(
			()=>{
				console.info('Initial data');
				db.ref().set({
					a: {
						b: 4,
						g: ['a','b']
					},
				}).then(()=>{
					console.log('…response from server');
				}).catch((err)=>{
					console.log('…error in server:', err);
				});
			},
			alg()
		);
	}
	if(queue[idx++]){
		setTimeout(
			()=>{
				console.info('Update data');
				db.ref('a/b').set({
					c: {
						d: 5,
						e: 6
					},
					f: true
				}).then(()=>{
					console.log('…response from server');
				}).catch((err)=>{
					console.log('…error in server:', err);
				});
			},
			alg()
		);
	}
	if(queue[idx++]){
		setTimeout(
			()=>{
				console.info('Update-remove data and root subscription');

				const onValueChange = db.ref().on('value', (snapshot)=>{
					console.log('Updated data');
					//console.log(JSON.stringify(snapshot.val(), null, '\t'));
				}, (err)=>{
					console.log('…error in server subscription:', err);
				});

				db.ref('a/b/c/e').set(null).then(()=>{
					console.log('…response from server');
				}).catch((err)=>{
					console.log('…error in server:', err);
				});

				db.ref().off('value', onValueChange);
			},
			alg()
		);
	}
	if(queue[idx++]){
		setTimeout(
			()=>{
				console.info('Current db state and A subscription:');

				const on_A_ValueChange = db.ref().on('value', (snapshot)=>{
					console.log('Updated A value');
					//console.log(JSON.stringify(snapshot.val(), null, '\t'));
				}, (err)=>{
					console.log('…error in server subscription:', err);
				});

				db.ref().once('value').then((snapshot)=>{
					console.log('…response from server');
					const v = snapshot.val();
					//console.log(JSON.stringify(v, null, '\t'));
				}).catch((err)=>{
					console.log('…error in server:', err);
				});

				//db.ref().off('value', on_A_ValueChange);

			},
			alg()
		);
	}
	if(queue[idx++]){
		setTimeout(
			()=>{
				console.info('Remove data');
				db.ref('a/b/c/d').remove().then(()=>{
					console.log('…response from server');
				}).catch((err)=>{
					console.log('…error in server:', err);
				});
			},
			alg()
		);
	}
	if(queue[idx++]){
		setTimeout(
			()=>{
				console.info('wipe data');
				db.ref().set(null).then(()=>{
					console.log('…response from server');
				}).catch((err)=>{
					console.log('…error in server:', err);
				});
			},
			alg()
		);
	}
	if(queue[idx++]){
		console.log('This is a drill');
		setTimeout(
			()=>{
				console.log('format expenses and dummy data');
				let dataStore = [];

				const onValueChange = db.ref('expenses').on('value', (snapshot)=>{
					console.log('');
					console.log('onValueChange (subscription)');
					dataStore = snapshot.val();
					//console.log(JSON.stringify(dataStore, null, ''));
				}, (err)=>{
					console.log('…error in server subscription:', err);
				});
				
				const onChildRemoved = db.ref('expenses').on('child_removed', (snapshot)=>{
					console.log('');
					console.log('onChildRemoved (subscription)');
					console.log(JSON.stringify(snapshot.val(), null, ''));
				}, (err)=>{
					console.log('…error in server subscription:', err);
				});
				
				const onChildChanged = db.ref('expenses').on('child_changed', (snapshot)=>{
					console.log('');
					console.log('onChildChanged (subscription)');
					console.log(JSON.stringify(snapshot.val(), null, ''));
				}, (err)=>{
					console.log('…error in server subscription:', err);
				});
				
				db.ref().set(null);
				
				const bt = 2500;
				let init = 10; // initial delay
				let i=0;

				dummyStore01.map((curr, idx, prnt) => (
					setTimeout(
						()=>(
							db.ref('expenses').push({
								description : curr.description,
								notes       : curr.notes,
								amount      : curr.amount,
								createdAt   : curr.createdAt,
							}).then((...args)=>{
								console.log('…response from server');
								//console.log(args);
							}).catch((err)=>{
								console.log('…error in server:', err);
								console.error(err);
							}) && i++
						),
						init + (((i++)-2) * bt)
					)
				));
			},
			alg()
		);
	}
	if(queue[idx++]){
		setTimeout(
			()=>{
				console.info('Current db state:');
				db.ref().once('value').then((snapshot)=>{
					console.log('…response from server');
					const v = snapshot.val();
					//console.log(JSON.stringify(v, null, '\t'));
				}).catch((err)=>{
					console.log('…error in server:', err);
				});
			},
			alg()
		);
	}
}

