var connect = require('connect');
var opn = require('opn');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
    opn('http://localhost:8080');
    console.log('Close me when you are done playing!')
});