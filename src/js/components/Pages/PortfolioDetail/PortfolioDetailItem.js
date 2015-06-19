import React from 'react';

export default class PortfolioDetailItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tags = this.props.item.tags.map(v => <li key={v}>{v}</li>);

        return (
            <section id="item">
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.description.long}</p>
                <ul>
                    {tags}
                </ul>
            </section>
        );
    }
}
