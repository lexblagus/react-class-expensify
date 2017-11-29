import expensesReducer from '../../reducers/expenses';
import dummyData from '../fixtures/dummyStore01';
import moment from 'moment';

test(
	'Test defaults',
	() => {
		const state = expensesReducer(
			undefined,
			{type: '@@INIT'}
		);
		expect(state).toEqual([])
	}
);

test('should REMOVE_EXPENSE by id', ()=>{
	const action = {
		type: 'REMOVE_EXPENSE',
		id: dummyData[1].id
	};
	
	const state = expensesReducer(dummyData, action);
	expect(state).toEqual([
			dummyData[0],
			dummyData[2],
			dummyData[3],
			dummyData[4],
			dummyData[5],
			dummyData[6],
			dummyData[7],
	])
});

test('should *not* REMOVE_EXPENSE if no id', ()=>{
	const action = {
		type: 'REMOVE_EXPENSE'
	};
	
	const state = expensesReducer(dummyData, action);
	expect(state).toEqual(dummyData)
});

// add, edit, not edit

test('should ADD_EXPENSE with data', ()=>{
	const data = { // 8
		description: 'Description F',
		notes: 'notes notes notes 666',
		amount: 600,
		createdAt: moment().add(5, 'days').unix(),
		whatever: 'this is the united states of whatever'
	};
	const action = {
		type: 'ADD_EXPENSE',
		expense: data
	};
	
	const state = expensesReducer(dummyData, action);
	expect(state).toEqual([
		...dummyData,
		data
	]);
});


test('should EDIT_EXPENSE with data', ()=>{
	const data = {
			id: dummyData[5].id,
			description: 'EDITED Description C',
			notes: 'EDITED notes 3',
			amount: 550,
			createdAt: moment().add(2.5, 'days').unix(),
		};
	const action = {
		type: 'EDIT_EXPENSE',
		id: dummyData[5].id,
		updates: data
	};
	
	const state = expensesReducer(dummyData, action);
	const exp = dummyData;
	exp[5] = data;
	expect(state).toEqual(
		exp
	);
});



test('should *not* EDIT_EXPENSE not found', ()=>{
	const data = {
		id: 0,
		description: 'EDITED Description C',
		notes: 'EDITED notes 3',
		amount: 550,
		createdAt: moment().add(2.5, 'days'),
	};
	const action = {
		type: 'EDIT_EXPENSE',
		updates: data
	};
	
	const state = expensesReducer(dummyData, action);
	expect(state).toEqual(
		dummyData
	);
});
