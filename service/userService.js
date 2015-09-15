'use strict';

var Users = require('../model/users');

var getAll = function (cb) {
	Users.collection().fetch().then(function (collection) {
		cb(collection);
	});
}

module.exports = {
	getAll: getAll	
};