var encoder = require('encode-decode');

module.exports = function getModel(domNode) {

  if (!domNode) {
    return {}
  }

  var encodedJson = '';
  if (typeof (domNode.textContent) !== undefined) {
    encodedJson = domNode.textContent;
  } else {
    encodedJson = domNode.innerHTML;
  }
  var json = encoder.htmlDecode(encodedJson);
  var model = JSON.parse(json);
  return model;
}
