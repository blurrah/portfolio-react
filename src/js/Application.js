import React from 'react';
import { RouteHandler } from 'react-router';

// Flux (alt)
import PortfolioStore from './stores/PortfolioStore';
import PortfolioActions from './actions/PortfolioActions';

// Reusable footer and header
import Footer from './components/Reusables/Footer';
import Header from './components/Reusables/Header';

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
				<RouteHandler {...this.props} />
				<Footer />
			</div>
		);
	}
};
