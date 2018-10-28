const assert = require('assert');
const sumOfOther = require('../functions/sumOfOther');

describe('sumOfOther should return sum of all elements exept the current value', function() {
    it('1', function() {
      const result = sumOfOther([1, 2, 3, 4, 5]);
      assert.deepEqual(result, [14, 13, 12, 11, 10]);
    });
    it('2', function() {
        const result = sumOfOther([-1, 2, -3, 4, -5]);
        assert.deepEqual(result, [-2, -5, 0, -7, 2]);
      });
      it('3', function() {
        const result = sumOfOther([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]);
        assert.deepEqual(result, [3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3]);
      }); 
});