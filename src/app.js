import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
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


const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));





let itvl = 500; // begin
let tmot = 10; // between
var run = [
	1, // all timmed test actions
	1, // add 3 expenses
	1, // add 5 expenses
	0, // edit 4
	0, // remove item
	1, // set 3 text filters
];

if(run[0]){ // timmed test actions
	if(run[1]){ // add 3 expenses
		setTimeout(
			() => {
				console.log('addExpense');
				window.expenseOne = store.dispatch(
					addExpense({
						description: '1 water bill',
						amount: 10000,
						createdAt: moment(  ).add(1, 'days').unix() * 1000
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
						createdAt: moment(  ).add(-3, 'days').unix() * 1000
					})
				);
			},
			tmot+=itvl
		);


		setTimeout(
			() => {
				console.log('addExpense');
				window.expenseThree = store.dispatch(
					addExpense({
						description: '3 rent',
						notes: 'rent rent rent rent ',
						amount: 0.01,
						createdAt: moment(  ).add(0, 'days').unix() * 1000
					})
				);
			},
			tmot+=itvl
		);
	}

	if(run[2]){ // add 5 expenses
		setTimeout(
			() => {
				console.log('addExpense');
				window.expenseA = store.dispatch(
					addExpense({
						description: 'Description A',
						notes: 'notes notes notes 1 ',
						createdAt: moment(  ).add(2, 'days').unix() * 1000,
						amount: 100
					})
				);
			},
			tmot+=itvl
		);


		setTimeout(
			() => {
				console.log('addExpense');
				window.expenseB = store.dispatch(
					addExpense({
						description: 'Description B',
						notes: 'notes notes notes 2',
						createdAt: moment(  ).add(3, 'days').unix() * 1000,
						amount: 200
					})
				);
			},
			tmot+=itvl
		);


		setTimeout(
			() => {
				console.log('addExpense');
				window.expenseC = store.dispatch(
					addExpense({
						description: 'Description C',
						notes: 'notes notes notes 3',
						createdAt: moment(  ).add(0, 'days').unix() * 1000,
						amount: 300
					})
				);
			},
			tmot+=itvl
		);


		setTimeout(
			() => {
				console.log('addExpense');
				window.expenseD = store.dispatch(
					addExpense({
						description: 'Description D',
						notes: 'notes notes notes 4',
						createdAt: moment(  ).add(-2, 'days').unix() * 1000,
						amount: 400
					})
				);
			},
			tmot+=itvl
		);


		setTimeout(
			() => {
				console.log('addExpense');
				window.expenseE = store.dispatch(
					addExpense({
						description: 'Description E',
						notes: 'notes notes notes 5',
						createdAt: moment(  ).add(1, 'days').unix() * 1000,
						amount: 500
					})
				);
			},
			tmot+=itvl
		);
	}

	if(run[3]){ // edit 4
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

	if(run[4]){ // remove items
		setTimeout(
			() => {
				console.log('removeExpense');
				store.dispatch(
					removeExpense({
						id: window.window.expenseB.expense.id
					})
				);
			},
			tmot+=itvl
		);
		setTimeout(
			() => {
				console.log('removeExpense');
				store.dispatch(
					removeExpense({
						id: window.window.expenseC.expense.id
					})
				);
			},
			tmot+=itvl
		);
	}

	if(run[5]){ // set 3 text filters
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
				store.dispatch( setTextFilter('bill') );
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
	}
};
