var assert = require('assert');

describe('Array', function() {  // test group 'Array'

  describe('#indexOf()', function() {   // nested test group '#indexOf()'
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
    
  });
});