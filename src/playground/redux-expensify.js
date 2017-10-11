import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';




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



const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type){
		case 'ADD_EXPENSE':
			//return state.concat(action.expense)
			return [
				action.expense,
				...state
			];
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
console.log( store.getState() );

store.subscribe(() => {
	console.log(store.getState())
});

store.dispatch(
	addExpense({ description: 'rent', note:'YES', amount: 100 })
);

store.dispatch(
	addExpense({ description: 'cofee', note:'NO', amount: 200 })
);


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