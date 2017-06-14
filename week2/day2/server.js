const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());
app.use(express.static(path.resolve('bower_components')));
app.use(express.static(path.resolve('public')));

require(path.resolve('server', 'config', 'database'));


app.listen(port, () => console.log(`Listening on port ${port}`));
