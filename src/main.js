import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home'
import Login from './back-office/layouts/login'

const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
		</Switch>
	</main>
)

export default Main;