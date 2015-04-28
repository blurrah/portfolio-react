import React from 'react';

export default class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <div className="inner">
                <h3><a href={'/portfolio/' + this.props.item.permalink}>{this.props.item.title}</a></h3>
                <p>{this.props.item.description.short}</p>
                </div>
            </article>
        );
    }
}

PortfolioItem.propTypes = {
    item: React.PropTypes.object
};
