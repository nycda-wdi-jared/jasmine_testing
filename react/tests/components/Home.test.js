import React from 'react';
import { findDOMNode } from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import $ from 'jquery';
import { renderIntoDocument, Simulate } from 'react-dom/test-utils';
import fetch from 'isomorphic-fetch';

import messages from './../db/messages.js';

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
			var homeComponent = mount(<Home/>);
			const $h1 = homeComponent.find('h1');
			$h1.simulate('click');
			expect(window.alert).toBeCalledWith('hello');
		});
	});
	describe('results state', () => {
		it('should be accurate to what is in the db', async () => {
			return messages().then((res) => {
				expect(res.length).toBe(5);
			});
		});
		it('should mount to the page through componentWillMount', () => {
			jest.spyOn(window, 'fetch').mockImplementation(() => Promise.resolve(['balls', 'socks', 'rocks']));;
			const wrapper = shallow(<Home/>);
			return wrapper.instance().fetchStuff().then(() => {
				expect(wrapper.state().results.length).toEqual(3);
			});	
		})
		it('should mount nothing if undefined', () => {
			jest.spyOn(window, 'fetch').mockImplementation(() => Promise.resolve(undefined));;
			const wrapper = shallow(<Home/>);
			return wrapper.instance().fetchStuff().then(() => {
				expect(wrapper.state().results).toBe(undefined);
			});	
		})
	});
});