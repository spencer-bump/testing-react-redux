import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList';
import Root from '../../Root.jsx';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['comment one', 'comment two']
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
})

describe('the comment list', () => {
  it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
  });

  it('text from each comment is visible', () => {
    // Using a CheerioWrapper
    expect(wrapped.render().text()).toContain('comment one');
    expect(wrapped.render().text()).toContain('comment two');

  });
});