import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';


const AddExpensePage = (props) => (
	<div>
		<div className="hero is-light">
			<h1 className="title is-1">Add expense</h1>
			<ExpenseForm
				onSubmit = {
					(expense)=>{
						props.dispatch(
							addExpense(expense)
						);
						props.history.push('/');
					}
				}
			/>
		</div>
	</div>
);

export default connect()(AddExpensePage);
