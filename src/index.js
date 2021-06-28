//BrowserRouter is a component, so we use it as a html element
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import {BookmarkContextProvider} from './store/bookmark-context';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BookmarkContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </BookmarkContextProvider>,
  document.getElementById("root")
);