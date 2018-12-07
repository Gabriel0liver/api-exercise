var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
const Person = require('../models/person');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ accessed: 'nice home page' });
});

router.get('/students', function(req, res, next) {
    Person.find()
    .then((people) => {
      res.json({people})
    })
});

module.exports = router;
