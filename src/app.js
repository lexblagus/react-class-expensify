import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import storeSelector from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
	console.info('store.subscribe');
	console.log(JSON.stringify(store.getState(), null, '	'));
});



store.dispatch(
	addExpense({
		description: 'water bill'
	})
);
store.dispatch(
	addExpense({
		description: 'gas bill'
	})
);
(()=>{ // visible expenses
	store.dispatch( setTextFilter('gas') );
	const state = store.getState();
	const visibleExpenses = storeSelector(state.expenses, state.filters);
	console.log(JSON.stringify(visibleExpenses, null, '	'));
})()

const jsx = (
	<AppRouter />
);

ReactDOM.render(jsx, document.getElementById('app'));
