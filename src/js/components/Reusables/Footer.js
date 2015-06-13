import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <footer>
                <p>Site is gemaakt met ReactJS, source code is te vinden op <a href="http://github.com/blurrah/portfolio-react">GitHub</a></p>
            </footer>
        );
    }
}
