import React from 'react';
import router from './router/router';

router.run((Handler, state) => {
	React.render(<Handler {...state} />, document.body);
});

// React.render(<Application />, document.body);
