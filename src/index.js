import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFontLoader from 'webfontloader';

WebFontLoader.load({
  google: {
    families: [
      'Arizonia:400,500,700:latin-ext',
      'Josefin Sans:200,300:latin-ext',
      'Inter:300,400:latin-ext',
    ]
  }
})

ReactDOM.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
