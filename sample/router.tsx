import * as React from 'react';
import { Router, Route } from '../router';
import HomePage from './routes/HomePage';
import NotFound from './routes/NotFound';

console.log(Router, Route)

export default function ({ history }) {
	return (
		<Router history={history}>
			<Route path="/" component={HomePage} />
			<Route path="/*" component={NotFound} />
		</Router>
	);
}
