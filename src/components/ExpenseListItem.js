import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';


const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
	<div className="">
		<b>
			<a
				href={`/edit/${id}`}
				className=""
				aria-label="link"
			>
				{description}
			</a>
		</b>
		&nbsp;
		<i>{createdAt}</i>
		&nbsp;
		<b>{amount}</b>
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
