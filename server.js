var express = require('express'),
app = express(),
meetupsController = require('./server/controller/meetup-controller.js'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDemo')
app.get('/',function(req,res)
{
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js',express.static(__dirname + '/client/js/'));


app.use(bodyParser());
app.post('/api/meetUps',meetupsController.create);
app.get('/api/meetUps',meetupsController.getAll);


app.listen(3000,function()
{
	console.log("Hello!!!");
})