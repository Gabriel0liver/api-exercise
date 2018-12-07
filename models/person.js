'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  origin: {
    type: String,
    required: true
  },  
  age: {
    type: Number,
    required: true
  },

});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
