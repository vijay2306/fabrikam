var express = require('express');
var path=require('path');
var app = express();

//server configuration
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
 });


app.get('/services', function (req, res) {
    var services=[{serviceid:1,serviceName:"human resource"},{serviceid:2,serviceName:"Accounting"},{serviceid:3,serviceName:"Product Management"}];
    res.send(services);
});

var server = app.listen(7667, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("listening on 7667", host, port)
});