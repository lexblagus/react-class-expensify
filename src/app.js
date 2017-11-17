import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import 'normalize.css';
//import 'milligram';
import 'bulma';
//import 'blueprint-css/dist/blueprint.min.css';

import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import {addExpense, editExpense, removeExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
//import storeSelector from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();
store.subscribe(() => {
	//console.info('store.subscribe');
	//console.log(JSON.stringify(store.getState(), null, '	'));
});


let itvl = 250;
let tmot = 500;

if(1){ // add 3 expenses

	setTimeout(
		() => {
			console.log('addExpense');
			window.expenseOne = store.dispatch(
				addExpense({
					description: '1 water bill',
					amount: 10000,
					createdAt: 1509544800000
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
					notes: 'gas gas gas gas gas',
					amount: 109500,
					createdAt: 1510955754363
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
					notes: 'rent rent rent rent ',
					createdAt: 1512050400000
				})
			);
		},
		tmot+=itvl
	);
}

if(1){ // add 5 expenses
	setTimeout(
		() => {
			console.log('addExpense');
			store.dispatch(
				addExpense({
					description: 'Description A',
					notes: 'notes notes notes 1 ',
					createdAt: 1510955754363,
					amount: 100
				})
			);
		},
		tmot+=itvl
	);


	setTimeout(
		() => {
			console.log('addExpense');
			store.dispatch(
				addExpense({
					description: 'Description B',
					notes: 'notes notes notes 2',
					createdAt: 1510955754363,
					amount: 200
				})
			);
		},
		tmot+=itvl
	);


	setTimeout(
		() => {
			console.log('addExpense');
			store.dispatch(
				addExpense({
					description: 'Description C',
					notes: 'notes notes notes 3',
					createdAt: 1510955754363,
					amount: 300
				})
			);
		},
		tmot+=itvl
	);


	setTimeout(
		() => {
			console.log('addExpense');
			store.dispatch(
				addExpense({
					description: 'Description D',
					notes: 'notes notes notes 4',
					createdAt: 1510955754363,
					amount: 400
				})
			);
		},
		tmot+=itvl
	);


	setTimeout(
		() => {
			console.log('addExpense');
			store.dispatch(
				addExpense({
					description: 'Description E',
					notes: 'notes notes notes 5',
					createdAt: 1510955754363,
					amount: 500
				})
			);
		},
		tmot+=itvl
	);
}

if(0){ // edit 4
	setTimeout(
		() => {
			console.log('editExpense');
			//console.log( window.expenseOne.expense.id );
			window.expenseOneEdited = store.dispatch(
				editExpense(
					window.expenseOne.expense.id,
					{
						description: '4 EDITED water bill',
						notes: 'waaaaaaater',
					}
				)
			);
		},
		tmot+=itvl
	);
}

if(0){ // set 3 text filters
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
}


const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
