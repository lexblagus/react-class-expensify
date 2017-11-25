import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


const idToBeRemoved = 'abc';
test('Should remove expense', ()=>{
	const action = removeExpense({id: idToBeRemoved});
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: idToBeRemoved
	});
});


const idToBeEdited = 'abc123';
const updatesToBeEdited = {'note': 'new note'};
test('Should edit expense', ()=>{
	const action = editExpense(idToBeEdited , updatesToBeEdited);
	expect(action).toEqual(
		{
			type: 'EDIT_EXPENSE',
			id: idToBeEdited,
			updates: updatesToBeEdited
		}
	);
});


test('Should add with values', ()=>{
	const expenseData = {
		description: 'rent',
		amount: 1000,
		createdAt: 1000,
		notes: 'last month expense'
	};
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});


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