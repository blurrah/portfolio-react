const alt = require('../alt');

class PortfolioActions {
    constructor() {
        this.generateActions('updateTitle', 'fillItems', 'addItem');
    }
}

export default alt.createActions(PortfolioActions);
