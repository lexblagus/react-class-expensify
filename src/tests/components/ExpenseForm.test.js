import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm  from '../../components/ExpenseForm';
import storeDummyData from '../fixtures/storeDummyData';


test('Should render empty ExpenseForm', ()=>{
	const wrapper = shallow(
		<ExpenseForm
			expense={storeDummyData[3]}
		/>
	);

	expect(wrapper).toMatchSnapshot();
});

test('Should render ExpenseForm with data', ()=>{
	const wrapper = shallow(
		<ExpenseForm
			expense={storeDummyData[3]}
		/>
	);

	expect(wrapper).toMatchSnapshot();
});

test('Should error for invalid submit form', ()=>{
	const wrapper = shallow(
		<ExpenseForm />
	);
	expect(wrapper).toMatchSnapshot();
	wrapper.find('form').simulate('submit', {
		preventDefault: ()=>{}
	});
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set desc on input change',()=>{
	const value = 'new description';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', {
		target: {value}
	});
	expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea chnge',()=>{
	const value = 'new note';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {
		target: {value}
	});
	expect(wrapper.state('notes')).toBe(value);
});

test('should set amount if valid input',()=>{
	const value = '23.50';
	const wrapper = shallow(<ExpenseForm />);
	//console.log( wrapper.find('[data-test-id="amount-field"]') );
	wrapper.find('input').at(1).simulate('change', {
		target: {value}
	});
	expect(wrapper.state('amount')).toBe(value);
});

test(' should NOT set amount if invalid input',()=>{
	const value = '15.224';
	const wrapper = shallow(<ExpenseForm />);
	//console.log( wrapper.find('[data-test-id="amount-field"]') );
	wrapper.find('input').at(1).simulate('change', {
		target: {value}
	});
	expect(wrapper.state('amount')).toBe(0);
});

test('Call onSubmit for valid form', ()=>{
	const onSubmitSpy = jest.fn();
	//onSubmitSpy('');
	//expect(onSubmitSpy).toHaveBeenCalledWith('');
	const wrapper = shallow(
		<ExpenseForm
			expense={storeDummyData[5]}
			onSubmit={onSubmitSpy}
		/>
	);
	wrapper.find('form').simulate('submit', {
		preventDefault: ()=>{}
	});
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		amount: storeDummyData[5].amount,
		createdAt: storeDummyData[5].createdAt,
		description: storeDummyData[5].description,
		notes: storeDummyData[5].notes,
	})
});


// Spies
test('should set new date on date change', ()=>{
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});
test('should set calendar focus on change', ()=>{
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
	expect(wrapper.state('calendarFocused')).toBe(focused);
});

