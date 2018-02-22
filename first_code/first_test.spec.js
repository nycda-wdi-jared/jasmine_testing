var whatever = require('./first_test.js')();
var add = require('./number_method.js');

describe("whatever function", function() {
  it("should return 'Hello Testing'", function() {
    expect(whatever).toBe("Hello Testing");
  });
});

describe("add function", function(){
	it("should add both numbers", function(){
		expect(add(1,3)).toEqual(4);
	});
});