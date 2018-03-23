import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Sale from './sale/home';

import './theme/css/bootstrap.min.css';
import './theme/css/font-awesome.min.css';
import './theme/css/AdminLTE.css';

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
