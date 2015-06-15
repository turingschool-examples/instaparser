const assert = require('assert');
const findHashtags = require('../lib/find-hashtags');

describe('findHashtags', function () {

  it('should find the hash tags', function () {

    const hashTags = findHashtags("Hello #hashtag #wowow");

    assert(Array.isArray(hashTags));
    assert.equal(hashTags.length, 2);

  });

  it('should return an empty array if there are no hashtags', function () {
    const hashTags = findHashtags("Hello");

    assert(Array.isArray(hashTags));
    assert.equal(hashTags.length, 0);
  });

});
