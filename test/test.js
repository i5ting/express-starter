var assert = require('chai').assert;
var expect = require('chai').expect;
require('chai').should();


describe('Test', function(){
	before(function() {
    // runs before all tests in this block
		
  })
  after(function(){
    // runs after all tests in this block
  })
  beforeEach(function(){
    // runs before each test in this block
  })
  afterEach(function(){
    // runs after each test in this block
  })
	
  describe('#test()', function(){
    it('should return ok when test finished', function(done){
      assert.equal('sang_test2', 'sang_test2');
      done()
    })
  })
})
