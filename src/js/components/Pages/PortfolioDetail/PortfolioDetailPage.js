import React from 'react';
import PortfolioStore from '../../../stores/PortfolioStore';
import PortfolioDetailItem from './PortfolioDetailItem';

function _getStateFromStore(permalink) {
    return {
        item: PortfolioStore.getItem(permalink)
    };
};

export default class PortfolioDetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentWillMount() {
        this.setState(_getStateFromStore(this.context.router.getCurrentParams().itemPermalink));

        PortfolioStore.listen(this.onChange.bind(this));
    }

    onChange() {
        this.setState(_getStateFromStore(this.context.router.getCurrentParams().itemPermalink));
    }

    componentWillUnmount() {
        PortfolioStore.unlisten(this.onChange.bind(this));
    }


    render() {
        let item;

        // Quick workaround to make sure the component does not get rendered without props
        if (this.state.item) {
            item = <PortfolioDetailItem item={this.state.item} />;
        }

        return (
            <article>
                <div className="inner">
                    {item}
                </div>
            </article>
        );
    }
}

 PortfolioDetailPage.contextTypes = {
    router: React.PropTypes.func.isRequired
};
