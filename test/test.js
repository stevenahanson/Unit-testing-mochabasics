var assert = require('assert'); // Require the built in 'assertion' library

// describe('Array', function() { // test group 'Array'

//     describe('#indexOf()', () => { // nested test group '#indexOf()' 
//     it('should return -1 when the value is not present', function(){
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });

describe('Math', () => {
    it('should test if 3*3 = 9', () => {
        assert.equal(9, 3*3);
    });

    it('should test if (3-4)*8 = -8', () => {
        assert.equal(-8, (3-4)*8);
    })
})