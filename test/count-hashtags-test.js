const assert = require('assert');
const countHashtags = require('../lib/count-hashtags');

describe('countHashtags', function () {

  it('should count the hash tags', function () {

    const posts = [
      "Yo #hashtag #wowow",
      "Hey #hashtag"
    ];

    assert.deepEqual(countHashtags(posts), {
      '#hashtag': 2,
      '#wowow': 1
    });

  });

});
