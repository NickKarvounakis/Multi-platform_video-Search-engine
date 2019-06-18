import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './store/'
// JS FILE Imports
import Header from './Components/Header/body.js'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
