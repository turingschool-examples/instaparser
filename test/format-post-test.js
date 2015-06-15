const assert = require('assert');
const formatPost = require('../lib/format-post');

describe('formatPost', function () {

  it('should format a post', function () {

    const samplePost = {
        "geometry": {
            "coordinates": [
                -104.9972884,
                39.7457837
            ],
            "type": "Point"
        },
        "properties": {
            "image": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/e15/11312543_492617944220756_1750405631_n.jpg",
            "likes": 2,
            "marker-color": "#8F8397",
            "marker-size": "small",
            "marker-symbol": "camera",
            "post": "this is what I am looking for",
            "thumbnail": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e15/11312543_492617944220756_1750405631_n.jpg",
            "username": "justice.leak"
        },
        "type": "Feature"
    }

    assert.equal(formatPost(samplePost), "this is what I am looking for");

  });

});
