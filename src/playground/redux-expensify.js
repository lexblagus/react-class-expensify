import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//const console = require("console");




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

const editExpense = (
	id,
	updates
) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates
});


const setTextFilter = (
	lookFor = ''
) => ({
	type: 'SET_TEXT_FILTER',
	lookFor
});



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
		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if(expense.id === action.id){
					return {
						...expense,
						...action.updates
					};
				}else{
					return expense;
				}
			});
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
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.lookFor
			};
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
	console.log('store.subscribe');
	//console.log('subscribed store.getState() = ', JSON.stringify(store.getState(), null, '	'));
});




store.dispatch(  addExpense({ description: 'begin', note:'BOF', amount: 1 })  );
console.log('after addExpense', JSON.stringify(store.getState(), null, '	'));

const expenseOne = store.dispatch(
	addExpense({ description: 'rent', note:'YES', amount: 100 })
);
console.log('after addExpense', JSON.stringify(store.getState(), null, '	'));
console.log('expenseOne.expense.id = ', expenseOne.expense.id);

const expenseTwo = store.dispatch(
	addExpense({ description: 'cofee', note:'NO', amount: 200 })
);
console.log('after addExpense', JSON.stringify(store.getState(), null, '	'));
console.log('expenseTwo.expense.id = ', expenseTwo.expense.id);

store.dispatch(  addExpense({ description: 'end', note:'EOF', amount: 10 })  );
console.log('after addExpense', JSON.stringify(store.getState(), null, '	'));


/*const expenseThree =*/ store.dispatch(
	removeExpense({ id: expenseOne.expense.id })
);
console.log('after removeExpense', JSON.stringify(store.getState(), null, '	'));

/*const expenseTwoEdit =*/ store.dispatch(
	editExpense( expenseTwo.expense.id, { amount: 500 } )
);
console.log('after editExpense', JSON.stringify(store.getState(), null, '	'));




store.dispatch(setTextFilter('rent'));
console.log('after setTextFilter (1)', JSON.stringify(store.getState(), null, '	'));
store.dispatch(setTextFilter());
console.log('after setTextFilter (2)', JSON.stringify(store.getState(), null, '	'));



/*
const demoState = {
	expenses: [{
		id: '53mb53mb53',
		description: 'This is desc',
		note: 'this is a note',
		amount: 54500,
		createdAt: 0
	}],
	filters: {
		text: 'initial',
		sortBy: 'amount', // dat or amount
		startDate: undefined,
		endDate: undefined,
	}
};

*///const x = {a:1,b:2}; const y = {...x, a:3}; console.log(y); const z = {a:3, ...x}; console.log(z);
