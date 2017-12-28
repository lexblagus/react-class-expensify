import expensesReducer from '../../reducers/expenses';
import dummyStore01 from '../fixtures/dummyStore01';
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
		id: dummyStore01[1].id
	};
	
	const state = expensesReducer(dummyStore01, action);
	expect(state).toEqual([
			dummyStore01[0],
			dummyStore01[2],
			dummyStore01[3],
			dummyStore01[4],
			dummyStore01[5],
			dummyStore01[6],
			dummyStore01[7],
	])
});

test('should *not* REMOVE_EXPENSE if no id', ()=>{
	const action = {
		type: 'REMOVE_EXPENSE'
	};
	
	const state = expensesReducer(dummyStore01, action);
	expect(state).toEqual(dummyStore01)
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
	
	const state = expensesReducer(dummyStore01, action);
	expect(state).toEqual([
		...dummyStore01,
		data
	]);
});


test('should EDIT_EXPENSE with data', ()=>{
	const data = {
			id: dummyStore01[5].id,
			description: 'EDITED Description C',
			notes: 'EDITED notes 3',
			amount: 550,
			createdAt: moment().add(2.5, 'days').unix(),
		};
	const action = {
		type: 'EDIT_EXPENSE',
		id: dummyStore01[5].id,
		updates: data
	};
	
	const state = expensesReducer(dummyStore01, action);
	const exp = dummyStore01;
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
	
	const state = expensesReducer(dummyStore01, action);
	expect(state).toEqual(
		dummyStore01
	);
});



test('should set expenses data', ()=>{
	const action = {
		type: 'SET_EXPENSES',
		expenses: [dummyStore01[1]]
	};
	const state = expensesReducer(dummyStore01, action);
	expect(state).toEqual([dummyStore01[1]]);
});


