/* eslint-disable no-undef */
require('babel/register')({
    blacklist: []
});

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var React = require('react/addons');
var Router = require('react-router');
var Iso = require('iso');

var apiRouter = require('./routers/api');
var routes = require('../src/js/router/routes');
var alt = require('../src/js/alt');

var app = express();

//require('node-jsx').install({harmony: true});

app.set('port', process.env.PORT || 1337);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Static files
app.use('/css', express.static(__dirname + '/../dist/css'));
app.use('/js', express.static(__dirname + '/../dist/js'));
app.use('/img', express.static(__dirname + '/../dist/img'));

// API URL's
app.get('/api/items/', apiRouter.items);
app.get('/api/item/:id/', apiRouter.item);
app.post('/api/insert/', apiRouter.insert);

app.get('*', apiRouter.index);

// Isomorphic React + Flux middleware
app.use(function (req, res) {
    alt.bootstrap(JSON.stringify(res.locals.data || {}));

    var iso = new Iso();

    Router.run(routes, req.url, function(Handler) {
        var content = React.renderToString(React.createElement(Handler));

        iso.add(content, alt.flush());
        res.render('index.ejs', {reactDom: iso.render() });
    });
});

console.log('Portfolio server listening on ' + app.get('port'));
app.listen(app.get('port'));
