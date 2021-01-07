'use strict';

const Mongodb = require('@pick-star/cli-mongodb');
const { mongodbUrl } = require('../../config/db');

function mongo() {
  return new Mongodb(mongodbUrl);
}

module.exports = mongo;
