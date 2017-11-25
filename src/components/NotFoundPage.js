import React from 'react';
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
	<div className="hero is-danger">
		<h1 className="title is-1">Page not found.</h1>
		<p>go <Link to="/">home</Link></p>
	</div>
);

export default NotFoundPage;
