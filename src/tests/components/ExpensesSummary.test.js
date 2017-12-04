import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import ExpensesSummary from '../../components/ExpensesSummary.js';
import dummyStore02 from '../fixtures/dummyStore02';
import { filters_0, filters_1 } from '../fixtures/dummyFilters';

test('should render ExpensesSummary with 1 item',()=>{
	const wrapper = shallow(
		<ExpensesSummary
			qtt={1}
			tot={1}
		/>
	);
	expect( wrapper ).toMatchSnapshot();
});


test('should render ExpensesSummary with plural items',()=>{
	const wrapper = shallow(
		<ExpensesSummary
			qtt={999}
			tot={666}
		/>
	);
	expect( wrapper ).toMatchSnapshot();
});
