import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<nav>
			<NavLink to="/" activeClassName="is-active" exact={true}>home</NavLink>
			&nbsp;
			<NavLink to="/create" activeClassName="is-active">create</NavLink>
			&nbsp;
			<NavLink to="/help" activeClassName="is-active">help</NavLink>
			&nbsp;
			&nbsp;
			&nbsp;
			<NavLink to="/edit" activeClassName="is-active">edit</NavLink>
			&nbsp;
			<NavLink to="/404" activeClassName="is-active">404</NavLink>
		</nav>
	</header>
);

export default Header;
