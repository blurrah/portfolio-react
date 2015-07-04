// Initiate and setup Mongoose
var mongoose = require('mongoose');
var request = require('request');

mongoose.connect('mongodb://localhost/portfolio');
var db = mongoose.connection;

var portfolioSchema = mongoose.Schema({
    id: Number,
    title: String,
    description: { short: String, long: String},
    tags: Array,
    images: Array,
    permalink: String
});

var Portfolio = mongoose.model('Portfolio', portfolioSchema);

exports.items = function(req, res, next) {
    Portfolio.find({}, function(err, items) {
        res.json(Object.keys(items).map(function(key) {
            return items[key];
        })).end();
    });
};

exports.item = function(req, res, next) {
    Portfolio.findOne({id: req.params.id}, function(error, item) {
        res.json(item).end();
    });
};

exports.insert = function(req, res, next) {
    console.log(req.body);
    if(req.body.id === null || req.body.id === undefined) {
        console.log('geen body data');
        res.status(500).end();
    }
    var item = new Portfolio(req.body);
    item.save(function (err) {
        if (err) handleError(err);

        Portfolio.findById(item, function(err, doc) {
            if (err) handleError(err);
            res.status(200).end();
        });
    });
};

exports.index = function(req, res, next) {
    Portfolio.find({}, function(err, items) {

        request({url: 'https://api.github.com/users/blurrah/repos', headers: {'User-Agent': 'blurrah'}}, function(err, response, body) {
            console.log(body);
            res.locals.data = {PortfolioStore: {items: items, repos: JSON.parse(body)}};
            next();
        });
    });
}
