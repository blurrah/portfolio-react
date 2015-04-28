import alt from '../alt';
import request from 'superagent';
import PortfolioActions from '../actions/PortfolioActions';
import PortfolioServerActions from '../actions/PortfolioServerActions';

class PortfolioStore {
    constructor() {
        this.bindActions(PortfolioActions);
        this.bindActions(PortfolioServerActions);

        this.title = 'Portfolio van Boris';
        this.items = [];
    }

    onFillItems() {
        request
            .get('/api/items')
            .end(function(res) {
                this.items[0] = res.body[0];
        }.bind(this));
    }

    onAddItem(item) {
        request
            .post('/api/insert/')
            .send({id: 0, title: 'Paddle up', description: { short: 'shortdesc', long: 'longdesc'}, tags: ['unity3d', 'js'], images: [0, 1], permalink: 'paddle-up'})
            .set('Accept', 'application/json')
            .end(function(res) {
                if (res.ok) {
                    alert('item adden werkt!');
                } else {
                    alert('item adden faalt..');
                }
            });
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

};

export default alt.createStore(PortfolioStore, 'PortfolioStore');
