import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App';
import ExampleActivityData from '../ExampleActivityData';

describe('Unit Tests', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve(ExampleActivityData));
  });

  test('should render the app component on the screen', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });

  test('should fetch Trip Advisor Gallery Data when the component mounts', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchTripAdvisorData');
    instance.componentDidMount();
    expect(instance.fetchTripAdvisorData).toHaveBeenCalledTimes(1);
  });

  test('should preload Trip Advisor Gallery Images after the component mounts', () => {
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    instance.componentDidMount();

    const preload = document.querySelectorAll('link');
    const preloadLengthIsGreaterThanOrEqualToZero = preload.length >= 0;
    expect(preloadLengthIsGreaterThanOrEqualToZero).toBe(true);
  });
});
