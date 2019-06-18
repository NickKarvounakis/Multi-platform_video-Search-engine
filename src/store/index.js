import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  query:''

}


const reducer = (state = initialState,action) => {
    console.log('reducer',action)
    switch(action.type){
      case 'SUBMIT_QUERY':
        return Object.assign({}, state, {query: action.value})
      default:
        return state;
    }

}

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk))) //if ever use thunk tweek this

export default store
