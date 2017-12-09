import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';


export class AddExpensePage extends React.Component{
	onSubmit = (expense) => {
		//...
		this.props.startAddExpense(expense);
		this.props.history.push('/');
	};
	render(){
		return (
			<div>
				<div className="hero is-light">
					<h1 className="title is-1">Add expense</h1>
					<ExpenseForm
						onSubmit = {this.onSubmit}
					/>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddExpense: (expense) => dispatch(startAddExpense(expense))
});


export default connect(undefined, mapDispatchToProps)(AddExpensePage);
