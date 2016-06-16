var express = require('express');
var mongoose = require('mongoose');
var specimen = require('./../models/specimen');
var router = express.Router();
var db = mongoose.connection;

router.route('/')
  .get(function (req, res, next) {
    specimen.find(function (err, specimens) {
      if (err) {
        return next(err);
      }
      return res.status(200).json(specimens);
    });
  })
  .post(function (req, res, next) {

  });

module.exports = router;
