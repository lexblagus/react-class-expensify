import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
	isAuthenticated,
	component: Component,
	...restProps
}) => (
	<Route {...restProps} component={(props)=>(
		!isAuthenticated ? (
			<div data-context="component-wrapper">
				<Component {...props} />
			</div>
		) : (
			<div data-context="redirect-wrapper">
				<Redirect to="/dashboard" />
			</div>
		)
	)}/>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

export default connect( mapStateToProps )( PublicRoute );