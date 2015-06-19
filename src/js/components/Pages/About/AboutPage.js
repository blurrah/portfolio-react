import React from 'react';

export default class AboutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>About</h3>
                <p>Boris is:</p>
                <ul>
                    <li>Boris</li>
                    <li>Certified Boris&trade;</li>
                </ul>
            </div>
        );
    }
}
