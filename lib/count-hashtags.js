const findHashtags = require('./find-hashtags');

module.exports = function (posts) {

  return posts.reduce(function (hashtagCount, post) {

    findHashtags(post).forEach(function (hashtag) {
      hashtagCount[hashtag] ? hashtagCount[hashtag]++ : hashtagCount[hashtag] = 1;
    });

    return hashtagCount;

  }, {});

};
