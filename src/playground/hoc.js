import React from 'react';
import ReactDOM from 'react-dom';

const Comp = (props) => (
	<div>
		<h1>Info</h1>
		<p> props: {props.attr} </p>
		<p> props2: {props.attr2} </p>
	</div>
);

const withComp = (WrappedComponent) => {
	return (props) => (
		<div>
			<p>also props: {props.attr}</p>
			<WrappedComponent {...props} />
		</div>
	);
};

const OtherComp = withComp(Comp);

ReactDOM.render(
	<OtherComp attr="value" attr2="value2" />,
	document.getElementById('app')
);