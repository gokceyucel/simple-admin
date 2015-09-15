'use strict';

var db = require('../database/index');

var Users = db.Model.extend({
  tableName: 'users'
});

module.exports = Users;
