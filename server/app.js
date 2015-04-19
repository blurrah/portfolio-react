var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    apiRouter = require('./routers/api');

var app = express();

app.set('port', process.env.PORT || 1337);

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

// Wildcard URL for the website
app.get('*', function(req, res) {
        res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

console.log('Portfolio server listening on ' + app.get('port'));
app.listen(app.get('port'));
