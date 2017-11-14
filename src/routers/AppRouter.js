import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from '../components/Header.js';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';

const AppRouter = () => (
	<BrowserRouter>
		<div  className="container">
			<Header/>
			<Switch>
				<Route path="/" exact={true} component={ExpenseDashboardPage} />
				<Route path="/create" exact={true} component={AddExpensePage} />
				<Route path="/edit/:id" exact={true} component={EditExpensePage} />
				<Route path="/help" exact={true} component={HelpPage} />
				<Route component={NotFoundPage}  />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
