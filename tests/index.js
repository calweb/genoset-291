var test = require('tap').test

var gsNotPresent = require('./dnaSample/negative.json')
var gsPresent = require('./dnaSample/positive.json')

test('gs291', function (t) {
  var negResult = require('../')(gsNotPresent)
  var posResult = require('../')(gsPresent)
  t.same(negResult, false, 'should return false')
  t.same(posResult, true, 'should return true')
  t.end()
})
