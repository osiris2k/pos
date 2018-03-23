import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Sale from './sale/home';

import './back-office/theme/css/bootstrap.min.css';
import './back-office/theme/css/font-awesome.min.css';
import './back-office/theme/css/AdminLTE.css';

class App extends Component {
	render() {
		return(
			<div>
				<Sale />
			</div>
		)
	}
}

export default App;
