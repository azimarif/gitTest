const {sum}= require('./lib.js');
const assert = require('assert');
describe('sum',function(){
  it('check with two no',function(){
    assert.equal(sum(1,2), 3);
  })
});