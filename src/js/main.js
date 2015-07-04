import React from 'react';
import router from './router/router';
import a11y from 'react-a11y';

import PortfolioWebAPIUtils from './utils/PortfolioWebAPIUtils';
import GithubApiUtils from './utils/GithubApiUtils';

PortfolioWebAPIUtils.getAllItems();
GithubApiUtils.getAll();

a11y(React);

router.run((Handler, state) => {
	React.render(<Handler {...state} />, document.getElementById('application'));
});
