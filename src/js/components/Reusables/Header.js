import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<nav className="navbar navbar-default" role="navigation">
					<div className="container">
						<ul className="nav navbar-nav">
							<li><a href="/">Home</a></li>
							<li><a href="/about">About</a></li>
							<li><a href="http://github.com/blurrah">Github</a></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}
