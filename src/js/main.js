import React from 'react';
import router from './router/router';
import PortfolioWebAPIUtils from './utils/PortfolioWebAPIUtils';

PortfolioWebAPIUtils.getAllItems();

router.run((Handler, state) => {
	React.render(<Handler {...state} />, document.getElementById('application'));
});

// React.render(<Application />, document.body);
