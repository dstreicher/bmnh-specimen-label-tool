var express = require('express');
var mongoose = require('mongoose');
var Specimen = require('./../models/specimen');
var router = express.Router();
var db = mongoose.connection;

router.route('/')
  .get(function (req, res, next) {
    Specimen.find(function (err, specimens) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(specimens);
    });
  })
  .post(function (req, res, next) {
    var entry = new Specimen(req.body);
    entry.save(function (err, entry) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(entry);
    });
  });

router.route('/:id')
  .get(function (req, res, next) {
    Specimen.findOne({ _id: req.params.id }, function (err, specimen) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(specimen);
    });
  });

module.exports = router;
