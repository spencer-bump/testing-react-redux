import React from 'react';
// should use shallow because it is
// a simple component
// import { shallow } from 'enzyme';

import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
  // FULL DOM rendering with enzyme
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a textarea and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the textarea', () => {
  beforeEach(() => {
    // Find the textarea element and
    // Simulate change event with 'mock' event object
    wrapped.find('textarea').simulate('change', {
      target: {value: "test comment"}
    });
    // Force the component to update
    wrapped.update();
  });

  it('has a textarea where users can type in', () => {
    // Assert that the textarea value has 'mock' data
    expect(wrapped.find('textarea').prop('value')).toEqual("test comment");
  });

  it('when form is submitted, textarea is cleared', () => {
    // Find the Form and Submit it
    wrapped.find('form').simulate('submit');
    // Force the component to update after submit
    wrapped.update();
    // Assert that the textarea value has 'mock' data
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});



