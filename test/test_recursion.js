const assert = require('assert');
Object.freeze(assert);
const recursion = require('../functions/recursion');

describe('recursion should return arrays of tree elements on the same lavel', function() {
    it('1', function() {
        let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
        const array = recursion(tree);
      assert.deepEqual(array, [[100], [90, 120], [70,99,110,130]]);
    });
});