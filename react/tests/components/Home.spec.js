var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var ReactTestUtils = require('react-dom/test-utils');

var Home = require('../../app/components/Home.js');

describe('Home', () => {
	it('should exist', () =>{
		expect(Home).toExist();
	});
});