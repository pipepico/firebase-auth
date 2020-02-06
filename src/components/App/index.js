import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation';

import * as ROUTES from '../../constants/routes';
import LandingPage from '../Landing';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import PasswordForgetPage from '../PasswordForget';
import NotFoundPage from '../NotFound';
import { Container } from '@material-ui/core';

const App = () => {
	return (
		<div>
			<Router>
				<Navigation />
				<Container maxWidth="sm">
					<Switch>
						<Route exact path={ROUTES.LANDING} component={LandingPage} />
						<Route path={ROUTES.HOME} component={HomePage} />
						<Route path={ROUTES.ACCOUNT} component={AccountPage} />
						<Route path={ROUTES.ADMIN} component={AdminPage} />
						<Route path={ROUTES.SIGN_IN} component={SignInPage} />
						<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
						<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
						<Route path="*" component={NotFoundPage} />
					</Switch>
				</Container>
			</Router>
		</div>
	);
};

export default App;
