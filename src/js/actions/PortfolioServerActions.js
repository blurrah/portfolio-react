import alt from '../alt';

class PortfolioServerActions {
    constructor() {
        this.generateActions('receivedMessages', 'filledItems', 'receivedRepos');
    }
}

export default alt.createActions(PortfolioServerActions);
