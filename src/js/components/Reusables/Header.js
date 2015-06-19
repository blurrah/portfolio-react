import React from 'react';
import {Link} from 'react-router';

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
							<li><Link to="home">Home</Link></li>
							<li><Link to="about">About Boris</Link></li>
							<li><a href="http://github.com/blurrah">Github</a></li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}
