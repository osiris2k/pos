import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class Sale extends Component{


	render(){
		return(
			<div className="wrapper row-offcanvas row-offcanvas-left">
				<aside className="right-side strech">
					<section className="content-header">
						<h1>
							POS <i className="fa fa-warning text-yellow"></i> Oops! Something went wrong.
						</h1>
						<ol className="breadcrumb">
							<li><Link to="/login"><i className="fa fa-key"></i> Login</Link></li>
							<li className="active">Log off</li>
						</ol>
					</section>

					<section className="content">

					</section>
				</aside>
			</div>
		)
	}
}

export default Sale;