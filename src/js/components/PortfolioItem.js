import React from 'react';

export default class PortfolioItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article>
                <div class="inner">
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.description.short}</p>
                </div>
            </article>
        );
    }
}
