import React from 'react';
import ListenerMixin from 'alt/mixins/ListenerMixin';
import Header from './components/Header';
import PortfolioStore from './stores/PortfolioStore';
import PortfolioActions from './actions/PortfolioActions';
import { RouteHandler } from 'react-router';

function _getStateFromStores() {
	return PortfolioStore.getState();
}

export default class Application extends React.Component {

	constructor(props) {
		super(props);
		this.state = _getStateFromStores();
	}

	componentWillMount() {
		PortfolioStore.listen(this.onChange);
	}

	componentDidMount() {
		PortfolioActions.fillItems();
	}

	componentWillUnmount() {
		PortfolioStore.unlisten(this.onChange);
	}

	onChange() {
		this.setState(_getStateFromStores());
	}

	_changeTitle() {
		PortfolioActions.updateTitle();
	}

	_addItem() {
		PortfolioActions.addItem();
	}

	render() {
		let mappedItems = this.state.items.map(function(value, index) {
				return <li key={value.id}>{value.title}</li>;
		});

		return (
			<div>
				<Header />
				<h1>{this.state.title}</h1>
				<RouteHandler />
				<p>Dit is de site van Boris, echt waar!</p>
				<a onClick={this._addItem}>Add item</a>
				<ul>
					{mappedItems}
				</ul>
			</div>
		);
	}
};
