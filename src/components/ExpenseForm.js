import React from 'react';

export default class ExpenseForm extends React.Component{
	state = {
		description: '',
		amount: 0,
		notes: ''
	};
	onDescChange = (evt) => {
		const description = evt.target.value;
		this.setState(() => ({description}));
	};
	onAmountChange = (evt) => {
		const amount = evt.target.value;
		this.setState(() => ({amount}));
	};
	onNotesChange = (evt) => {
		const notes = evt.target.value;
		this.setState(() => ({notes}));
	};
	render(){
		return (
			<div>
				<form>
					<input
						type="text"
						placeholder="description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescChange}
					/>
					<input
						type="number"
						placeholder="amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<textarea
						placeholder="notes"
						value={this.state.notes}
						onChange={this.onNotesChange}
					/>
					<button>Add</button>
				</form>
			</div>
		);
	}
	
}