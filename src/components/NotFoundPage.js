import React from 'react';
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
	<div>
		404!
		go <Link to="/">home</Link>
	</div>
);

export default NotFoundPage;