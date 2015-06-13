import React from 'react';
import PortfolioStore from '../../../stores/PortfolioStore';
import PortfolioActions from '../../../actions/PortfolioActions';
import PortfolioItem from './PortfolioItem';
import { RouteHandler } from 'react-router';

function _getStateFromStores() {
	return PortfolioStore.getState();
}

export default class IndexPage extends React.Component {

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
        let portfolioItems = this.state.items.map((value, index) => {
            return <PortfolioItem key={value.id} item={value} />;
		});

        return (
            <div>
				<RouteHandler {...this.props} />
                <ul>
                    {portfolioItems}
                </ul>
            </div>
        );
    }
}
