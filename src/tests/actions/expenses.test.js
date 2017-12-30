import confMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
	startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses
} from '../../actions/expenses';
import dummyStore01 from '../fixtures/dummyStore01.js';
import db from '../../firebase/firebase.js';

const createMockStore = confMockStore([thunk]);


beforeEach((done) => {
	const dummyData01 = {};
	dummyStore01.forEach(({
		id, description, notes, amount, createdAt
	}) => {
		dummyData01[id] = { description, notes, amount, createdAt }
	});
	//console.log( dummyData01 );
	db.ref('expenses').set(dummyData01).then(() => done());
});


test('should setup set expense action object with data', () => {
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


test('Should edit expense', ()=>{
	const idToBeEdited = 'abc123';
	const updatesToBeEdited = {'notes': 'new note'};
	const action = editExpense(idToBeEdited , updatesToBeEdited);
	expect(action).toEqual(
		{
			type: 'EDIT_EXPENSE',
			id: idToBeEdited,
			updates: updatesToBeEdited
		}
	);
});


test('Should remove expense', ()=>{
	const idToBeRemoved = 'abc';
	const action = removeExpense({id: idToBeRemoved});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: idToBeRemoved
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


test('Should add default expense to DB and store', ()=>{
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
	});
});
