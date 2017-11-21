import React from 'react';
import { shallow } from 'enzyme';
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

