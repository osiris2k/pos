import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Bill extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<h5><a className="btn btn-floating btn-large cyan pulse"><i className="material-icons">monetization_on</i></a> Bill no.</h5>
					<div className="col s8">
						<table className="striped">
							<thead>
							<tr>
								<th className="s1">No</th>
								<th>Name</th>
								<th>Price</th>
								<th>Promotion</th>
							</tr>
							</thead>

							<tbody>
							<tr>
								<td>Alvin</td>
								<td>Eclair</td>
								<td>$0.87</td>
							</tr>
							<tr>
								<td>Alan</td>
								<td>Jellybean</td>
								<td>$3.76</td>
							</tr>
							<tr>
								<td>Jonathan</td>
								<td>Lollipop</td>
								<td>$7.00</td>
							</tr>
							</tbody>
						</table>
					</div>
					<div className="col s4">
						<table className="bordered">
							<tr>
								<td>Product Price</td>
								<td>
									<input type="text"/>
								</td>
							</tr>
							<tr>
								<td>Total</td>
								<td>
									<input type="text"/>
								</td>
							</tr>
							<tr>
								<td>Change</td>
								<td>
									<input type="text"/>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default Bill;