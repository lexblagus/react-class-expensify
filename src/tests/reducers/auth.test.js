import auth from '../../reducers/auth.js';

let hs, st0;

beforeEach(()=>{
	hs = 'XXX';
	st0 = {some: 1};
});

test('Test reducer default', () => {
	const ac = {type:'',uid:hs};
	const st1 = auth(st0, ac);
	expect( st1 ).toEqual(st0);
});

test('Test reducer login', () => {
	const ac = {type:'LOGIN',uid:hs};
	const st1 = auth(st0, ac);
	expect( st1 ).toEqual({
		uid: hs
	});
});

test('Test reducer logout', () => {
	const ac = {type:'LOGOUT'};
	const st1 = auth(st0, ac);
	expect( st1 ).toEqual({});
});
