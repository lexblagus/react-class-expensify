import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem  from '../../components/ExpenseListItem';
import dummyStore01 from '../fixtures/dummyStore01';


test('Should render ExpenseListItem with expense', ()=>{
	//console.log( {...dummyStore01[0]} );
	
	const wrapper = shallow(
		<ExpenseListItem
			{...dummyStore01[0]}
			//dispatch    = {()=>{}}
		/>
	);
	
	expect(wrapper).toMatchSnapshot();
});

