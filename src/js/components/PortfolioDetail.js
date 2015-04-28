import React from 'react';
import PortfolioStore from '../stores/PortfolioStore';

function _getStateFromStore() {
    let permalink = this.props.params.itemPermalink;
    return {
        item: PortfolioStore.getItem(permalink)
    };
};

export default class PortfolioDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = _getStateFromStore().bind(this);
    }

    componentWillMount() {
        PortfolioStore.listen(this.onChange.bind(this));
    }

    onChange() {
        this.setState(_getStateFromStore.bind(this));
    }

    componentWillUnmount() {
        PortfolioStore.unlisten(this.onChange.bind(this));
    }

    componentWillReceiveProps() {
        this.setState(_getStateFromStore.bind(this));
    }

    render() {
        /*let tags = this.props.item.tags.map((value, index) => {
            return <li key={value}>{value}</li>;
        });

        let images = this.props.item.images.map((value, index) => {
            return <img src={'/img/item/' + value + '.png'} />
        }); */


        return (
            <article>
                <div className="inner">
                    <h3>Detail van {this.state.item.title}</h3>
                </div>
            </article>
        );
    }
}

PortfolioDetail.propTypes = {
    params: React.PropTypes.object
};
