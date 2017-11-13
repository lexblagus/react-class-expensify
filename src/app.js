import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import 'normalize.css';
import 'milligram';

import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import {addExpense, removeExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
//import storeSelector from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
store.subscribe(() => {
	//console.info('store.subscribe');
	//console.log(JSON.stringify(store.getState(), null, '	'));
});


let itvl = 500;
let tmot = 500;

setTimeout(
	() => {
		console.log('addExpense');
		window.expenseOne = store.dispatch(
			addExpense({
				description: '1 water bill',
				amount: 10000
			})
		);
	},
	tmot+=itvl
);


setTimeout(
	() => {
		console.log('addExpense');
		window.expenseTwo = store.dispatch(
			addExpense({
				description: '2 gas bill',
				amount: 109500,
				createdAt: -1000
			})
		);
	},
	tmot+=itvl
);


setTimeout(
	() => {
		console.log('addExpense');
		window.expenseTwo = store.dispatch(
			addExpense({
				description: '3 rent',
				createdAt: 2000
			})
		);
	},
	tmot+=itvl
);


/*
setTimeout(
	() => {
		console.log('setTextFilter');
		store.dispatch( setTextFilter('water') );
	},
	tmot+=itvl
);


setTimeout(
	() => {
		console.log('setTextFilter');
		store.dispatch( setTextFilter('gas') );
	},
	tmot+=itvl
);


setTimeout(
	() => {
		console.log('setTextFilter');
		store.dispatch( setTextFilter() );
	},
	tmot+=itvl
);


setTimeout(
	() => {
		console.log('removeExpense');
		store.dispatch(
			removeExpense({
				id: window.expenseOne.expense.id
			})
		);
	},
	tmot+=itvl
);


(()=>{ // visible expenses
	store.dispatch( setTextFilter('gas') );

	const state = store.getState();
	const visibleExpenses = storeSelector(state.expenses, state.filters);
	console.log(JSON.stringify(visibleExpenses, null, '	'));
})()


*/


const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
