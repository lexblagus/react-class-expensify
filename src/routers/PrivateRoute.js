import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header.js';

export const PrivateRoute = ({
	isAuthenticated,
	component: Component,
	...restProps
}) => (
	<Route {...restProps} component={()=>(
		isAuthenticated ? (
			<div data-context="component-wrapper">
				<Header/>
				<Component {...restProps} />
			</div>
		) : (
			<div data-context="redirect-wrapper">
				<Redirect to="/" />
			</div>
		)
	)}/>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

export default connect( mapStateToProps )( PrivateRoute );