const alt = require('../alt');

class PortfolioActions {
    constructor() {
        this.generateActions('updateTitle', 'fillItems', 'addItem');
    }
}

module.exports = alt.createActions(PortfolioActions);
