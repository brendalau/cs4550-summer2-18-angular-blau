const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/cs4550-summer2-18-angular-blau'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/cs4550-summer2-18-angular-blau/index.html'));
});

app.listen(process.env.PORT || 4200);
