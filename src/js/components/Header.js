import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav>
				<ul>
					<li className="menu-item"><a href="/">Home</a></li>
					<li className="menu-item"><a href="/about">Portfolio</a></li>
					<li className="menu-item"><a href="#">Github</a></li>
				</ul>
			</nav>
		);
	}
}
