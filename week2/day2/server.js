const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8800;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
app.use(express.static(path.resolve('bower_components')));
app.use(express.static(path.resolve('public')));

require(path.resolve('server', 'config', 'database'));
require(path.resolve('server', 'config', 'routes'))(app);


app.listen(port, () => console.log(`Listening on port ${port}`));
