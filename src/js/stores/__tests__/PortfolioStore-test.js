jest.dontMock('../PortfolioStore');
import alt from '../../alt';
import PortfolioStore from '../PortfolioStore';

describe('PortfolioStore', function() {
    //let alt;
    let callback;
    //let PortfolioStore;

    beforeEach(function() {
        //alt = require('../../alt');
        alt.dispatcher = { register: jest.genMockFunction() };
        callback = alt.dispatcher.register.mock.calls[0][0];
    });

    it('registers a callback with the dispatcher', () => {
        expect(alt.dispatcher.register.mock.calls.length).toBe(1);
    });
});
