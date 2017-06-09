const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));

const animals = [
  {
    name: 'monkey',
    legs: 2,
    eatsPeople: false
  },
  {
    name: 'horse',
    legs: 4,
    eatsPeople: false
  },
  {
    name: 'sharksnake',
    legs: 0,
    eatsPeople: true
  }
];

app.get('/animals', function(req, res){
  res.json(animals);
})

app.get('/animals/:id', function(req, res){
  res.json(animals[req.params.id]);
})

app.post('/animals', function(req, res){
  animals.push(req.body);
  console.log(req.body);
  res.json(animals);
})













app.listen(port, () => console.log(`listening on port ${ port }`));
