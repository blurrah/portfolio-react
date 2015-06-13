import alt from '../alt';

class PortfolioServerActions {
    constructor() {
        this.generateActions('receivedMessages', 'filledItems');
    }
}

export default alt.createActions(PortfolioServerActions);
