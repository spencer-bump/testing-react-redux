import React from 'react';
// should use shallow because it is
// a simple component
// import { shallow } from 'enzyme';

// Full DOM rendering with enzyme using mount
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
})

it('has a textarea and a button', () => {
  const wrapped = mount(<CommentBox />);

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

