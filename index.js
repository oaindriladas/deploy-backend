var express = require('express');
var app = express();

app.listen(3300, console.log("server is running!"));

app.get('/', (request, response) => {
response.send("hello world!");
})