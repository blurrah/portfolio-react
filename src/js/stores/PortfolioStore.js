import alt from '../alt';
import PortfolioActions from '../actions/PortfolioActions';
import PortfolioServerActions from '../actions/PortfolioServerActions';

class PortfolioStore {
    constructor() {
        this.bindActions(PortfolioActions);
        this.bindActions(PortfolioServerActions);

        this.title = 'Portfolio van Boris';
        this.items = [];
        this.repos = [];
    }

    onUpdateTitle(title) {
        this.title = title;
    }

    onReceivedMessages(messages) {
        this.items = messages;
    }

    static getItem(permalink) {
        let state = this.getState().items;
        let result;

        for (let i = 0; i < state.length; i++) {
            if (state[i].permalink === permalink) {
                result = state[i];
            }
        }
        return result;
    }

    onReceivedRepos(repos) {
        this.repos = repos;
        console.log(this.repos[0]);
    }

};

export default alt.createStore(PortfolioStore, 'PortfolioStore');
