var jsTransform = require('jstransform');
var visitors = require('./index').visitorList;

module.exports = function (src) {
  var transformed = jsTransform.transform(visitors, src).code;

  return transformed;
};
