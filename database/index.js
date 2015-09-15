'use strict';

var config = require('./config');
var knex = require('knex')(config);
var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;