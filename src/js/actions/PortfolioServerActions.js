const alt = require('../alt');

class PortfolioServerActions {
    constructor() {
        this.generateActions('receivedMessages', 'filledItems');
    }
}

export default alt.createActions(PortfolioServerActions);
