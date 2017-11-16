import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ({dispatch, id, description, notes, amount, createdAt}) => (
	<div className="">
		<b>
			<Link to={`/edit/${id}`} >
				{description}
			</Link>
		</b>
		&nbsp;
		<i>
			<Link to={`/edit/${id}`} >
				{notes}
			</Link>
		</i>
		&nbsp;
		m( {createdAt} )
		&nbsp;
		<b>$ {amount / 100}</b>
		&nbsp;
		<a
			href="javascript:;"
			className="button is-small is-danger"
			onClick = {() => {
				dispatch(removeExpense({id}));
			}}
			aria-label="remove"
		>DEL</a>
	</div>
);

export default connect()(ExpenseListItem);
