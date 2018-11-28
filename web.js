var express = require('express');
var app = express();
app.use(express.static(__dirname + '/dist/Desafio-Frontend-Accenture-Recife'));
app.listen(process.env.PORT || 3000);