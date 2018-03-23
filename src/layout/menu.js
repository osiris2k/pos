import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component{
	render(){
		return(
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="brand-logo right">Logo</a>
						<ul id="nav-mobile" className="left hide-on-med-and-down">
							<li><Link to="/">Homepage</Link></li>
							<li><Link to="/bill">Open bill</Link></li>
							<li><Link to="/product">Manage Product</Link></li>
							<li><Link to="/report">Report</Link></li>
							<li><Link to="/user">Manage User</Link></li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
export default Menu;