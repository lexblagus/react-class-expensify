import DotEnv from 'dotenv';
DotEnv.config({path: '.env.test'});

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

console.log(`Process node environment (jest/test context): ${process.env.NODE_ENV}`);

Enzyme.configure({
	adapter: new Adapter()
});
