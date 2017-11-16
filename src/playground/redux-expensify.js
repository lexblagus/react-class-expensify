import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//const console = require("console");





const addExpense = ({
	description = '',
	notes = '',
	amount = 0,
	createdAt = 0
} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		notes,
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
const sortByDate = () => ({
	type: 'SORT_BY_DATE'
});
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT'
});
const setStartDate = (startDate) => ({
	type: 'SET_START_DATE',
	startDate
});
const setEndDate = (endDate) => ({
	type: 'SET_END_DATE',
	endDate
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
		case 'SORT_BY_AMOUNT':
			return {
				...state,
				sortBy: 'amount'
			};
		case 'SORT_BY_DATE':
			return {
				...state,
				sortBy: 'date'
			};
		case 'SET_START_DATE':
			return {
				...state,
				startDate: action.startDate
			};
		case 'SET_END_DATE':
			return {
				...state,
				endDate: action.endDate
			};
	}
};





const getVisibleExpenses = (expenses, {
	text, sortBy, startDate, endDate
}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());
		return startDateMatch && endDateMatch && textMatch
	}).sort((a,b) => {
		if(sortBy === 'date'){
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if(sortBy === 'amount'){
			return a.amount < b.amount ? 1 : -1;
		}
	});
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
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(JSON.stringify(visibleExpenses, null, '	'));
});




//store.dispatch(addExpense({ description: 'begin', notes:'BOF', amount: 1 }));
const expenseOne = store.dispatch(  addExpense({ description: 'rent', notes:'YES', amount: 100, createdAt: 1000 })  );
const expenseTwo = store.dispatch(  addExpense({ description: 'cofee', notes:'NO', amount: 300, createdAt: -1000 })  );
const expenseThree = store.dispatch(  addExpense({ description: 'A', amount: 10, createdAt: -1 })  );
const expenseFour = store.dispatch(  addExpense({ description: 'B', amount: 20, createdAt: 1 })  );
//store.dispatch(  addExpense({ description: 'end', notes:'EOF', amount: 10 })  );


//store.dispatch(removeExpense({ id: expenseOne.expense.id }));

//store.dispatch(  editExpense( expenseTwo.expense.id, { amount: 500 } )  );


//store.dispatch(setTextFilter('EN'));
//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());
//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
store.dispatch(sortByAmount());

//store.dispatch(setStartDate(1000));
//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1000));
//store.dispatch(setEndDate());


/*
const demoState = {
	expenses: [{
		id: '53mb53mb53',
		description: 'This is desc',
		notes: 'this is a note',
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
