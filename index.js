const sampleData = require('./sample-data');

const formatPost = require('./lib/format-post');
const countHashtags = require('./lib/count-hashtags');

const result = countHashtags(sampleData.map(formatPost));

console.log(result);
