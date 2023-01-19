// // Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './components/redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
