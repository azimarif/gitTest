const {sum}= require('./lib.js');
const assert = require('assert');
describe('sum',function(){
  it('check with two no',function(){
    assert.equal(sum(1,2), 3);
    assert.equal(sum(1,3), 4);
  })
  it('check with two no again',function(){
    assert.equal(sum(1,2), 4);
    assert.equal(sum(1,3), 4);
  })
});
