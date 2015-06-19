import React from 'react';
import router from './router/router';
import PortfolioWebAPIUtils from './utils/PortfolioWebAPIUtils';
import a11y from 'react-a11y';

PortfolioWebAPIUtils.getAllItems();
a11y(React);

router.run((Handler, state) => {
	React.render(<Handler {...state} />, document.getElementById('application'));
});
