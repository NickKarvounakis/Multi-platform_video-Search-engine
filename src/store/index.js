import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  query:'',
  youtubePrevPage:'AAAAAA',
  youtubeNextPage:'AAAAAA'

}


const reducer = (state = initialState,action) => {
    console.log('reducer',action)
    switch(action.type){
      case 'SUBMIT_QUERY':
        return Object.assign({}, state, {query: action.value})
      case 'NEXT_PAGE_SET':
        return Object.assign({}, state, {youtubeNextPage: action.value})
      case 'NEXT_PAGE':
        return Object.assign({}, state, {youtubePrevPage: state.youtubeNextPage})
      default:
        return state;
    }

}

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk))) //if ever use thunk tweek this

export default store
