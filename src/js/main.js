import React from 'react';
import router from './router/router';
import a11y from 'react-a11y';
import Iso from 'iso';

import alt from './alt';

import PortfolioWebAPIUtils from './utils/PortfolioWebAPIUtils';
import GithubApiUtils from './utils/GithubApiUtils';

PortfolioWebAPIUtils.getAllItems();


a11y(React);

Iso.bootstrap(function (state, _, container) {
	alt.bootstrap(state);

	GithubApiUtils.getAll();

	router.run((Handler) => {
		React.render(<Handler {...state} />, document.getElementById('application'));
	});
});
