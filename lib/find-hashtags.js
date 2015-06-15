module.exports = function (text) {
  return text.match(/(#\w+)/g) || [];
};
