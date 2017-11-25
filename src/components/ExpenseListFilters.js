import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component{
	state = {
		calendarFocused: null
	};
	onDatesChange = ({startDate, endDate}) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};
	onFocusChange = (calendarFocused) => {
		this.setState(
			() => ({calendarFocused})
		);
	};
	onSortChange = (evt) => {
		if(evt.target.value === 'date'){
			this.props.sortByDate();
		} else if(evt.target.value === 'amount'){
			this.props.sortByAmount();
		}
	};
	onFilterChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};
	render(){
		return (
			<div>
				<br />
				<input
					data-test-id="list-filters-criteria"
					type="text"
					value={this.props.filters.text}
					onChange={this.onFilterChange}
					
				/>
				<select
					data-test-id="list-filters-sort"
					value={this.props.filters.sortBy}
					onChange={this.onSortChange}
				>
					<option value="amount">Amount</option>
					<option value="date">Date</option>
				</select>
				<br />
				<DateRangePicker
					startDate={this.props.filters.startDate}
					endDate={this.props.filters.endDate}
					onDatesChange={this.onDatesChange}
					focusedInput={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					showClearDates={true}
					numberOfMonths={1}
					isOutsideRange={()=>false}
				/>
				<br />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
	setStartDate: (startDate) => dispatch(setStartDate(startDate)),
	setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
