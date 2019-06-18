import React from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './store/'
// JS FILE Imports

import Header from './Components/Header/body.js'
import Results_body from './Components/Body/body.js'
import ExpansionPanel from './Components/Body/ExpansionPanels.js'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <ExpansionPanel />
      </Provider>
    </div>
  );
}

export default App;
