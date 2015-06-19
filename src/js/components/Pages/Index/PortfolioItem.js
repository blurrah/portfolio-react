import React from 'react';
import {Link} from 'react-router';

export default class PortfolioItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <div className="inner">
                <h3><Link to="portfolio" params={{itemPermalink: this.props.item.permalink}}>{this.props.item.title}</Link></h3>
                <p>{this.props.item.description.short}</p>
                </div>
            </article>
        );
    }
}

PortfolioItem.propTypes = {
    item: React.PropTypes.object
};
