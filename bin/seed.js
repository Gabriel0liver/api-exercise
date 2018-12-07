const mongoose = require('mongoose');
const Person = require('../models/person');


mongoose.connect('mongodb://localhost/mydb', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const people = [
  {
    name: 'Alejo',
    origin: 'Catalunya',
    age: 23
  },
  {
    name: 'Selim',
    origin: 'Murcia',
    age: 24
  },
  {
    name: 'Quino',
    origin: 'Catalunya',
    age: 25
  },
];

Person.create(people)
  .then(() => {
    mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
});