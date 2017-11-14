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
		calendarFocused: false,
		error: ''
	};
	onDescChange = (evt) => {
		const description = evt.target.value;
		this.setState(() => ({description}));
	};
	onAmountChange = (evt) => {
		const amount = evt.target.value;
		if(
			!!amount ||
			amount.match(/^\d{1,}(\.\d{0,2})?$/)
		){
			this.setState(() => ({amount}));
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
		const note = evt.target.value;
		this.setState(() => ({note}));
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
				note: this.state.note
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
						value={this.state.note}
						onChange={this.onNotesChange}
					/>
					<button>Add</button>
				</form>
			</div>
		);
	}
	
}