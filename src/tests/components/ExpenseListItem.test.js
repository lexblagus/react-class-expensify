import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem  from '../../components/ExpenseListItem';
import storeDummyData from '../fixtures/storeDummyData';


test('Should render ExpenseListItem with expense', ()=>{
	//console.log( {...storeDummyData[0]} );
	
	const wrapper = shallow(
		<ExpenseListItem
			{...storeDummyData[0]}
			//dispatch    = {()=>{}}
		/>
	);
	
	expect(wrapper).toMatchSnapshot();
});

