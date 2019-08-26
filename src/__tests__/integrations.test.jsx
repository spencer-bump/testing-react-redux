import React from 'react';
import { mount } from 'enzyme';
import Root from '../Root.jsx';
import App from '../components/App.jsx';
import moxios from 'moxios';

let wrapped;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  wrapped.find('.fetch-comments').simulate('click');
  // Need a delay for moxios to complete mock asych
  moxios.wait(() => {
    // forces update of the component
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    // Jest waits for done() if passed done as an argument
    done();
    wrapped.unmount();
  });
});

