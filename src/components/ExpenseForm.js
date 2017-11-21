import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



//console.log(  moment().format('MMM Do')  );

export default class ExpenseForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: props.expense ? props.expense.id : undefined,
			description: props.expense ? props.expense.description : '',
			amount: props.expense ? (props.expense.amount/100).toString() : 0,
			notes: props.expense ? props.expense.notes : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: ''
		};
	}
	onDescChange = (evt) => {
		const description = evt.target.value;
		this.setState(() => ({description}));
	};
	onAmountChange = (evt) => {
		const amount = evt.target.value;
		if(
			!amount ||
			amount.match(/^\d{1,}(\.\d{0,2})?$/)
		){
			//console.log('VALID');
			this.setState(() => ({amount}));
		}else{
			//console.log('INvalid');
		}
	};
	onDateChange = (createdAt) => {
		if( createdAt ){
			this.setState(
				() => ({createdAt})
			);
		}
	};
	onNotesChange = (evt) => {
		const notes = evt.target.value;
		this.setState(() => ({notes}));
	};
	onFocusChange = ({ focused }) => {
		this.setState(
			() => ({ calendarFocused: focused })
		)
	};
	onSubmit = (e) => {
		e.preventDefault();
		
		if(
			!this.state.description ||
			!this.state.amount
		){
			this.setState(
				() => ({ error: 'missing stuff' })
			)
		}else{
			this.setState(
				() => ({ error: '' })
			)
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				notes: this.state.notes
			});
		}
	};
	render(){
		return (
			<div>
				{
					this.state.error &&
					<code>{this.state.error}</code>
				}
				<form onSubmit={this.onSubmit}>
					description: 
					<input
						type="text"
						placeholder="description"
						autoFocus
						value={this.state.description}
						onChange={this.onDescChange}
					/>
					<br />
					notes: 
					<textarea
						placeholder="notes"
						value={this.state.notes}
						onChange={this.onNotesChange}
					/>
					<br />
					created at: 
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={()=>false}
					/>
					<br />
					amount: 
					<input
						type="number"
						placeholder="amount"
						value={this.state.amount}
						onChange={this.onAmountChange}
					/>
					<br />
					<button>Save</button>
				</form>
			</div>
		);
	}
	
}