import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
var console = require("console");




const addExpense = ({
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

const removeExpense = ({
	id = ''
} = {}) => ({
	type: 'REMOVE_EXPENSE',
	id
});

// remove expense

const expensesReducerDefaultState = [];
const expensesReducer = (
	state = expensesReducerDefaultState,
	action
) => {
	switch (action.type){
		case 'ADD_EXPENSE':
			//return state.concat(action.expense)
			return [
				...state,
				action.expense
			];
		case 'REMOVE_EXPENSE':
			return  state.filter(({ id }) => id!==action.id);
		default:
			return state;
	}
};

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date', // date or amount
	startDate: undefined,
	endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type){
		default:
			return state;
	}
};




const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	})
);
console.log('initial store.getState() = ',  JSON.stringify(store.getState(), null, '	') );

store.subscribe(() => {
	console.log('subscribed store.getState() = ', JSON.stringify(store.getState(), null, '	'))
});


store.dispatch(  addExpense({ description: 'begin', note:'BOF', amount: 1 })  );

const expenseOne = store.dispatch(
	addExpense({ description: 'rent', note:'YES', amount: 100 })
);
console.log('expenseOne.expense.id = ', expenseOne.expense.id);

const expenseTwo = store.dispatch(
	addExpense({ description: 'cofee', note:'NO', amount: 200 })
);
console.log('expenseTwo.expense.id = ', expenseTwo.expense.id);

store.dispatch(  addExpense({ description: 'end', note:'EOF', amount: 10 })  );


console.warn(JSON.stringify(store.getState(), null, '	'));
const expenseThree = store.dispatch(
	removeExpense({ id: expenseOne.expense.id })
);
console.warn(JSON.stringify(store.getState(), null, '	'));


const demoState = {
	expenses: [{
		id: '53mb53mb53',
		description: 'This is desc',
		note: 'this is a note',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'rent',
		sortBy: 'amount', // dat or amount
		startDate: undefined,
		endDate: undefined,
	}
};