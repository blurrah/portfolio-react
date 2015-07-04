import request from 'superagent';
import PortfolioServerActions from '../actions/PortfolioServerActions';

const GithubApiUtils = {
    repoUrl: 'https://api.github.com/users/blurrah/repos',

    getAll: function() {
        let items;

        request
            .get(this.repoUrl)
            .end((res) => {
                items = res.body;

                PortfolioServerActions.receivedRepos(items);
            });
    }
};


export default GithubApiUtils;
