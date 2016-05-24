var tap = require('tap');
var mam = require('../index');
tap.equal(mam(200), 'big');
tap.equal(mam(-10), 'negative');
tap.equal(mam(1), 'odd');
tap.equal(mam(2), 'even');
