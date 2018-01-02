import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({startLogin}) => (
	<div className="hero is-primary">
		<h1 className="title is-1">Login</h1>
		<button onClick={startLogin}>login</button>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
