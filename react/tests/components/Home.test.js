import React from 'react';
import { findDOMNode } from 'react-dom';
import { shallow, mount } from 'enzyme';
import $ from 'jquery';
import { renderIntoDocument, Simulate } from 'react-dom/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './../../app/components/Home';

Enzyme.configure({ adapter: new Adapter() });

describe('Home', () => {
	var home;
	var $el;
	beforeEach(function() {
		home = renderIntoDocument(<Home/>);
		$el = $(findDOMNode(home));
	});

	it('should exist', () => {
		expect(home).toBeTruthy();
	});
	it('should have an img with a puppy', () => {
		var $pupImg = $el.find('img').attr('src');

		expect($pupImg).toBe("./images/puppy.jpg");
	});
	describe('h1 tag', () => {
		it('should have an h1 tag reading Hello World & Puppy', () => {
			var $h1Txt = $el.find('h1').text();

			expect($h1Txt).toBe("Hello World & Hello Puppy");
		});
		it('should render an alert on click', () => {
			window.alert = jest.fn();
			const home = mount(<h1 onClick={alert("hello")}/>);
			home.find('h1').simulate('click');
			expect(window.alert).toBeCalledWith('hello');
		});
	});
});