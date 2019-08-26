import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root.jsx';
import App from './components/App.jsx';

ReactDom.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
