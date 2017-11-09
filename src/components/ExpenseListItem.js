import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
	<div>
		<h2>{description}</h2>
		<button
			onClick = {() => {
				dispatch(removeExpense({id}));
			}}
		>remove</button>
		&nbsp;
		amount = {amount},
		createdAt = {createdAt}
	</div>
);

export default connect()(ExpenseListItem);
