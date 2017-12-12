import confMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import dummyStore01 from '../fixtures/dummyStore01.js';

const createMockStore = confMockStore([thunk]);

/*
test('Should add with defaults', ()=>{
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			"amount": 0,
			"createdAt": 0,
			"description": "",
			"notes": "",
			id: expect.any(String)
		}
	});
});
*/

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
	const updatesToBeEdited = {'note': 'new note'};
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
		expect(1).toBe(1);
		done();
	});
});


test('Should add default expense to DB and store', ()=>{
});
