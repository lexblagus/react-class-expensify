import moment from 'moment';
import confMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	startAddExpense,
	addExpense,
	editExpense,
	startEditExpense,
	removeExpense,
	startRemoveExpense,
	setExpenses,
	startSetExpenses
} from '../../actions/expenses';
import dummyStore01 from '../fixtures/dummyStore01.js';
import db from '../../firebase/firebase.js';

const createMockStore = confMockStore([thunk]);




beforeEach((done) => {
	jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
	
	const dummyData01 = {};
	dummyStore01.forEach(({
		id, description, notes, amount, createdAt
	}) => {
		dummyData01[id] = { description, notes, amount, createdAt }
	});
	//console.log( dummyData01 );
	db.ref('expenses').set(dummyData01).then(() => done());
});




test('should set expenses data', () => {
	const action = setExpenses(dummyStore01);
	//console.warn( 'action', action );
	//console.warn( 'dummyStore01', dummyStore01 );
	expect(action).toEqual({
		type: 'SET_EXPENSES',
		expenses: dummyStore01
	});
});

test('should fetch data from firebase', (done)=>{
	const store = createMockStore({});
	store.dispatch( startSetExpenses() ).then(() => {
		const actions = store.getActions();
		expect( actions[0] ).toEqual({
			type: 'SET_EXPENSES',
			expenses: dummyStore01.sort((a,b)=>(
				a.id > b.id
			))
		});
		done();
	})
});




test('Should add with values', ()=>{
	const action = addExpense(
		dummyStore01[3]
	);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: dummyStore01[3]
	});
});

test('Should add expense to DB and store', (done)=>{
	const store = createMockStore({});
	const expenseData = {
		description: 'JEST TEST // ' + dummyStore01[3].description,
		notes: 'JEST TEST // ' + dummyStore01[3].notes,
		amount: dummyStore01[3].amount,
		createdAt: dummyStore01[3].createdAt,
	};
	store.dispatch(startAddExpense(expenseData)).then(()=>{
		//expect(1).toBe(1);
		//...
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});
		
		return db.ref(`expenses/${actions[0].expense.id}`).once('value');
		//done();
	}).then((snapshot)=>{
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});
});

test('Should add default expense to DB and store', (done)=>{
	const store = createMockStore({});
	const expenseDefault = {
		description: '',
		notes: '',
		amount: 0,
		createdAt: 0,
	};
	store.dispatch(startAddExpense(expenseDefault)).then(()=>{
		//expect(1).toBe(1);
		//...
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'ADD_EXPENSE',
			expense: {
				id: expect.any(String),
				...expenseDefault
			}
		});
		
		return db.ref(`expenses/${actions[0].expense.id}`).once('value');
		//done();
	}).then((snapshot)=>{
		expect(snapshot.val()).toEqual(expenseDefault);
		done();
	});
});




test('Should edit expense', ()=>{
	const idToBeEdited = dummyStore01[1].id;
	const updatesToBeEdited = {'notes': 'NOTE UPDATED'};
	const actionEdit = editExpense(idToBeEdited , updatesToBeEdited);
	//console.warn( actionEdit );
	expect(actionEdit).toEqual(
		{
			type: 'EDIT_EXPENSE',
			id: idToBeEdited,
			updates: updatesToBeEdited
		}
	);
});

test('Should edit expense in db', (done)=>{
	const store = createMockStore({});
	const idToBeEdited = dummyStore01[2].id;
	const updatesToBeEdited = {
		notes: 'NOTE UPDATED IN DB',
		description: 'DESC CHANGED',
		amount: 666,
		createdAt: moment().unix() * 1000
	};
	store.dispatch(
		startEditExpense(
			idToBeEdited,
			updatesToBeEdited
		)
	).then(()=>{
		const actions = store.getActions();
		expect(actions[0]).toEqual(
			{
				type: 'EDIT_EXPENSE',
				id: idToBeEdited,
				updates: updatesToBeEdited
			}
		);
		return db.ref(`expenses/${idToBeEdited}`).once('value');
	}).then((snapshot)=>{
		//expect( snapshot.val() ).toEqual(updatesToBeEdited);
		expect( snapshot.val().notes       ).toEqual( updatesToBeEdited.notes       );
		expect( snapshot.val().description ).toEqual( updatesToBeEdited.description );
		expect( snapshot.val().amount      ).toEqual( updatesToBeEdited.amount      );
		expect( snapshot.val().createdAt   ).toEqual( updatesToBeEdited.createdAt   );
		done();
	});
});




test('Should remove expense', ()=>{
	const idToBeRemoved = dummyStore01[4].id;
	const action = removeExpense({id: idToBeRemoved});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: idToBeRemoved
	});
});

test('Should remove expense from db', (done)=>{
	const store = createMockStore({});
	const idToBeRemoved = dummyStore01[2].id; // XXXXXXXX-243d-42d3-a11c-dacd957df150
	store.dispatch(
		startRemoveExpense({ id:idToBeRemoved })
	).then(()=>{
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: 'REMOVE_EXPENSE',
			id: dummyStore01[2].id
		});
		return db.ref(`expenses/${actions[0].id}`).once('value');
	}).then((snapshot)=>{
		expect(snapshot.val()).toBeFalsy();
		done();
	});
});
