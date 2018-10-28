const assert = require('assert');
Object.freeze(assert);
const make = require('../functions/make');

function sum(a, b) {
    return a + b;
}

describe('make should return result of function sum', function() {
    it('1', function() {
      const result = make(1)(3)(sum);
      assert.equal(result, 4);
    });
    it('2', function() {
        const result = make(1)(3, 5, 7)(1, 3)(sum);
        assert.equal(result, 20);
      });
      it('3', function() {
        const result = make(1)(3, 5, 7)(1, 3)(67, 8)(sum);
        assert.equal(result, 95);
      });
});