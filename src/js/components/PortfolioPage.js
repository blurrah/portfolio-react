import React from 'react';
import PortfolioStore from '../stores/PortfolioStore';
import PortfolioActions from '../actions/PortfolioActions';

function _getStateFromStores() {
	return PortfolioStore.getState();
}

export default class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = _getStateFromStores();
    }

    componentWillMount() {
        PortfolioStore.listen(this.onChange.bind(this));
    }

    componentDidMount() {
        PortfolioActions.fillItems();
    }

    onChange() {
        this.setState(_getStateFromStores);
    }

    componentWillUnmount() {
        PortfolioStore.unlisten(this.onChange.bind(this));
    }

    render() {
        let portfolioItems = this.state.items.map(function(value, index) {
				return <li key={value.id}><a href={'/item/' + value.permalink}>{value.title} - {value.description.short}</a></li>;
		});

        return (
            <div>
                <h3>PortfolioPage component</h3>
                <ul>
                    {portfolioItems}
                </ul>
            </div>
        );
    }
}
