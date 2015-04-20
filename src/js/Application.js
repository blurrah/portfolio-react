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
		PortfolioStore.listen(this.onChange.bind(this));
	}

	componentWillUnmount() {
		PortfolioStore.unlisten(this.onChange.bind(this));
	}

	onChange() {
		this.setState(_getStateFromStores);
	}

	_changeTitle() {
		PortfolioActions.updateTitle();
	}

	_addItem() {
		PortfolioActions.addItem();
	}

	render() {
		return (
			<div>
				<Header />
				<RouteHandler />
			</div>
		);
	}
};
