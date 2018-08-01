var fs = require('fs');
var path = require('path');
var express = require('express');
var pdf = require('html-pdf');
var Handlebars = require('handlebars');
var config = require('../server.config');
var router = express.Router();

Handlebars.registerHelper('genusCodeTrim', function (genus) {
  var genusCode = genus.substring(0, 2).toUpperCase();
  return new Handlebars.SafeString(genusCode);
});

router.route('/')
  .post(function (req, res, next) {
    var page;
    fs.readFile('./templates/labels.hbs', "utf-8", function (err, file) {
      if (err) {
        throw err;
      }
      var template = Handlebars.compile(file);
      var content = template(req.body);
      pdf.create(content, { format: req.body.paperSize, phantomPath: config.PHANTOM_PATH }).toFile('./dist/pdf/specimen_labels.pdf', function (err) {
        if (err) {
          return console.log(err);
        }
        res.sendStatus(200);
      });
    });
  });

router.route('/download')
  .get(function (req, res, next) {
    res.status(200).download('./dist/pdf/specimen_labels.pdf', 'specimen_labels.pdf');
  });

module.exports = router;
