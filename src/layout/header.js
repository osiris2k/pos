import React, {Component} from 'react';
import { Router } from 'react-router';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			bill: 'Close',
			message: 'Open bill.',
			product: []
		}
		this.readyForSale = this.readyForSale.bind(this);
		this.addProducts = this.addProducts.bind(this);
		this.resetProduct = this.resetProduct.bind(this);
	}

	readyForSale() {
		this.setState({bill: 'Open', message: 'Reset all'});
		if (this.state.bill === 'Open') {

		} else if (this.state.bill === 'Close') {

		}
	}

	addProducts(event) {
		var productList = this.state.product;
		productList.push(this.refs.productId.value);
		this.setState({product: productList});
		event.preventDefault();
	}

	resetProduct(event) {
		this.setState({product: null});
		event.preventDefault();
	}

	render() {
		if (this.state.bill === 'Open') {
			return (
				<div>
					<h1>{this.props.title}</h1>
					<h2>Status : {this.state.bill}</h2>
					<button onClick={this.resetProduct}>{this.state.message}</button>
					<form>
						<input type="text" ref="productId"/>
						<button type="button" onClick={this.addProducts}>OK</button>
					</form>
					<h2>
						{this.state.product}
					</h2>
				</div>
			)
		} else {
			return (
				<div>
					<h1>{this.props.title}</h1>
					<h2>Status : {this.state.bill}</h2>
					<button onClick={this.readyForSale}>{this.state.message}</button>
				</div>
			)
		}
	}
}

export default Header;