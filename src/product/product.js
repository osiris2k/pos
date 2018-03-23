import React, {Component} from 'react';

class Product extends Component {
	render() {
		return (
			<div>
				<h5><a className="btn btn-floating btn-large cyan"><i className="material-icons">toys</i></a> Products
				</h5>
				<div className="row">
					<div className="col s6">
						<form>
							<div className="input-field col s5">
								<input id="icon_prefix" type="text" ref="search_text"/>
								<label htmlFor="icon_prefix">Search</label>
								<i className="material-icons prefix">search</i>
							</div>
						</form>
					</div>
					<div className="col s6">
						
					</div>
				</div>
				<div className="rows">
					<div className="col s6">
						<table className="striped">
							<thead>
							<tr>
								<th className="col s1">Picture</th>
								<th className="col s1">Sku ID</th>
								<th className="col s1">Type</th>
								<th>Product Name</th>
								<th>Price</th>
								<th>Stock</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>Alvin</td>
								<td>Eclair</td>
								<td>Eclair</td>
								<td>Eclair</td>
								<td>Eclair</td>
								<td>$0.87</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}

export default Product;