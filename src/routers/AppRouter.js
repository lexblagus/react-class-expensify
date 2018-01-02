import React from 'react';
import { Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js';
import LoginPage from '../components/LoginPage.js';
import AddExpensePage from '../components/AddExpensePage.js';
import EditExpensePage from '../components/EditExpensePage.js';
import HelpPage from '../components/HelpPage.js';
import NotFoundPage from '../components/NotFoundPage.js';

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" exact={true} component={LoginPage} />
				<PrivateRoute path="/dashboard" exact={true} component={ExpenseDashboardPage} />
				<PrivateRoute path="/create" exact={true} component={AddExpensePage} />
				<PrivateRoute path="/edit/:id" exact={true} component={EditExpensePage} />
				<Route path="/help" exact={true} component={HelpPage} />
				<Route component={NotFoundPage}  />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
