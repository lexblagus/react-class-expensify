import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
	onSubmit = (expense) => {
		this.props.editExpense(
			this.props.expense.id,
			{...expense}
		)
		this.props.history.push('/');
	};
	onClick = () => {
		this.props.removeExpense(
			{id: this.props.expense.id}
		)
		this.props.history.push('/');
	};
	render(){
		return (
			<div>
				<section className="section">
					<div className="container">
						{
							this.props.expense &&
							<div>
								<h2 className="title is-2">
									Edit
									<span className="title is-4">
										&nbsp;
										{this.props.expense.id}
									</span>
								</h2>
								<div className="card">
									<div className="card-content">
										<ExpenseForm
											expense={this.props.expense}
											onSubmit={this.onSubmit}
										/>
										<button
											data-test-id="edit-expense-remove"
											className="button is-small is-danger"
											onClick = {this.onClick}
										>Delete</button>
									</div>
								</div>
							</div>
						}
						{
							!this.props.expense &&
							<div>
								<h2 className="title is-2">
									Item not found
								</h2>
							</div>
						}
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	expense: state.expenses.find(
		(expense) => (expense.id === props.match.params.id)
	)
});

const mapDispatchToProps = (dispatch) => ({
	editExpense: (a,b) => dispatch(editExpense(a,b)),
	removeExpense: (expense) => dispatch(removeExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
