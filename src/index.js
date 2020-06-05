import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import BuildingProvider from './context/BuildingContext';

/**
 * React method which needs the JSX and the element ID to render the application.
 * We wrap the App with Provider so the app can use data from Provider.
 */
ReactDOM.render(
  <React.StrictMode>
    <BuildingProvider>
      <App />
    </BuildingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
