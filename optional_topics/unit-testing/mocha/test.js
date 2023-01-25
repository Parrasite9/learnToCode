const add = require('../unit_test_example/add');

const assert = require('assert')


describe('add()', () => {
    it('should return 2 when passed integer values 1 and 1 as parameters', () => {
        assert.equal(add(1,1), 2);
    });
    it('should return 2 when passed string values "1" and "1" as parameters', () => {
      assert.equal(add("1","1"), 2);
    });    
});