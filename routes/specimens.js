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

router.route('/:specimen_id')
  .get(function (req, res, next) {
    Specimen.findOne({ catalogNumber: req.params.specimen_id }, function (err, specimen) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(specimen);
    });
  });

// router.route('/:specimen_id/label')
//   .get(function (req, res, next) {
//     Specimen.findOne({ catalogNumber: req.params.specimen_id }, function (err, specimen) {
//       if (err) {
//         return next(err);
//       }
//       specimen.toLabel(function (baseImage) {
//         console.log(baseImage);
//         return res.status(200).send(baseImage);
//       });
//     });
//   });

module.exports = router;
