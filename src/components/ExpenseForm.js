import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


console.log(  moment().format('MMM Do')  );

export default class ExpenseForm extends React.Component{
	state = {
		description: '',
		amount: 0,
		notes: '',
		createdAt: moment(),
		calendarFocused: false
	};
	onDescChange = (evt) => {
		const description = evt.target.value;
		this.setState(() => ({description}));
	};
	onAmountChange = (evt) => {
		const amount = evt.target.value;
		if(
			amount.match(/^\d*(\.\d{0,2})?$/)
		){
			this.setState(() => ({amount}));
		}
	};
	onDateChange = (createdAt) => {
		this.setState(
			() => ({createdAt})
		);
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
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={()=>false}
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