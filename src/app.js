import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { firebase } from './firebase/firebase';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
//import './firebase/firebase';
//import './playground/firebase'; // <!>
//import 'normalize.css';
//import 'milligram';
import 'bulma';
//import 'blueprint-css/dist/blueprint.min.css';
//import 'normalize.css/normalize.css';

import AppRouter, { history } from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import {
	startSetExpenses, startAddExpense, editExpense, removeExpense
} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import {login, logout} from './actions/auth';
//import storeSelector from './selectors/expenses';

import './styles/styles.scss';




const store = configureStore();
store.subscribe(() => {
	//console.info('store.subscribe');
	//console.log(JSON.stringify(store.getState(), null, '	'));
});

const jsx =
	<Provider store={store}>
		<AppRouter />
	</Provider>
;

let hasRendered = false;

const renderApp = () => {
	if( !hasRendered ){
		ReactDOM.render(
			jsx
		,
			document.getElementById('app')
		);
		hasRendered = true;
	}
};

ReactDOM.render(<p>loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
	if( user ){
		console.log('loged in: ', user.id);
		store.dispatch(login(user.id));
		store.dispatch(
			startSetExpenses()
		).then(() => {
			renderApp();
			if( history.location.pathname==='/' ){
				history.push('/dashboard');
			}
		})
	}else{
		console.log('loged out');
		store.dispatch(logout());
		renderApp();
		history.push('/');
	}
});




if(0){
	console.warn('Test suite');
	const conf = {initDelay: 1, between: 1500};
	const tasks = [
		{ enabled : true, fn: () => {
			console.log('startAddExpense');
			window.expenseOne = store.dispatch(
				startAddExpense({
					description: '1 water bill',
					amount: 10000,
					createdAt: moment(  ).add(1, 'days').unix() * 1000
				})
			);
			console.warn( '53', window.expenseOne );
		} },
		{ enabled : true, fn: () => {
			console.log('startAddExpense');
			window.expenseTwo = store.dispatch(
				startAddExpense({
					description: '2 gas bill',
					notes: 'gas gas gas gas gas',
					amount: 109500,
					createdAt: moment(  ).add(-3, 'days').unix() * 1000
				})
			);
		} },
		{ enabled : true, fn: () => {
			console.log('startAddExpense');
			window.expenseThree = store.dispatch(
				startAddExpense({
					description: '3 rent',
					notes: 'rent rent rent rent ',
					amount: 0.01,
					createdAt: moment(  ).add(0, 'days').unix() * 1000
				})
			);
		} },
		{ enabled : true, fn: () => {
			console.log('startAddExpense');
			window.expenseA = store.dispatch(
				startAddExpense({
					description: 'Description A',
					notes: 'notes notes notes 1 ',
					createdAt: moment(  ).add(2, 'days').unix() * 1000,
					amount: 100
				})
			);
		} },
		{ enabled : true, fn: () => {
			console.log('startAddExpense');
			window.expenseB = store.dispatch(
				startAddExpense({
					description: 'Description B',
					notes: 'notes notes notes 2',
					createdAt: moment(  ).add(3, 'days').unix() * 1000,
					amount: 200
				})
			);
		} },
		{ enabled : true, fn: () => {
			console.log('startAddExpense');
			window.expenseC = store.dispatch(
				startAddExpense({
					description: 'Description C',
					notes: 'notes notes notes 3',
					createdAt: moment(  ).add(0, 'days').unix() * 1000,
					amount: 300
				})
			);
		} },
		{ enabled : true, fn: () => {
			console.log('startAddExpense');
			window.expenseD = store.dispatch(
				startAddExpense({
					description: 'Description D',
					notes: 'notes notes notes 4',
					createdAt: moment(  ).add(-2, 'days').unix() * 1000,
					amount: 400
				})
			);
		} },
		{ enabled : true, fn: () => {
			console.log('startAddExpense');
			window.expenseE = store.dispatch(
				startAddExpense({
					description: 'Description E',
					notes: 'notes notes notes 5',
					createdAt: moment(  ).add(1, 'days').unix() * 1000,
					amount: 500
				})
			);
		} },
		{ enabled : false, fn: () => {
			console.log('editExpense');
			window.expenseOneEdited = store.dispatch(
				editExpense(
					window.expenseOne.expense.id,
					{
						description: '4 EDITED water bill',
						notes: 'waaaaaaater',
					}
				)
			);
			console.warn( '143', window.expenseOne );
		} },
		{ enabled : false, fn: () => {
			console.log('removeExpense');
			store.dispatch(
				removeExpense({
					id: window.window.expenseB.expense.id
				})
			);
		} },
		{ enabled : false, fn: () => {
			console.log('removeExpense');
			store.dispatch(
				removeExpense({
					id: window.window.expenseC.expense.id
				})
			);
		} },
		{ enabled : false, fn: () => {
			console.log('setTextFilter');
			store.dispatch( setTextFilter('water') );
		} },
		{ enabled : false, fn: () => {
			console.log('setTextFilter');
			store.dispatch( setTextFilter('gas') );
		} },
		{ enabled : false, fn: () => {
			console.log('setTextFilter');
			store.dispatch( setTextFilter('bill') );
		} },
		{ enabled : false, fn: () => {
			console.log('setTextFilter');
			store.dispatch( setTextFilter() );
		} },
	];
	let currTimer = conf.initDelay;
	console.log(
		tasks.filter(
			(itm0, idx0, abv0) => (itm0.enabled===true)
		).map(
			(itm1, idx1, abv1) => {
				currTimer += conf.between
				return setTimeout(
					itm1.fn,
					currTimer
				);
			}
		)
	)
}
