'use strict';

var express = require('express');
var router = express.Router();
var userService = require('../service/userService');

router.get('/', function(req, res, next) {
	userService.getAll(function (collection) {
		res.setHeader('Content-Type', 'application/json');
  		res.send(JSON.stringify(collection));
	});
});

module.exports = router;
