import request from 'superagent';
import PortfolioServerActions from '../actions/PortfolioServerActions';

const PortfolioWebAPIUtils = {

    getAllItems: function() {
        let items;
        request
            .get('/api/items')
            .end(function(res) {
                items = res.body;
                PortfolioServerActions.receivedMessages(items);
            });
    }
};

export default PortfolioWebAPIUtils;
