import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  query:'',
  youtubeInclude:true,
  vimeoInclude:true,
  youtubePreviousPage:'AAAAAA',
  youtubeCurrentPage:'AAAAAA',
  youtubeNextPage:'AAAAAA'

}


const reducer = (state = initialState,action) => {
    console.log('reducer',action)
    switch(action.type){
      case 'YOUTUBE_TRIGGER':
        return Object.assign({}, state, {youtubeInclude: !state.youtubeInclude})
      case 'VIMEO_TRIGGER':
        return Object.assign({}, state, {vimeoInclude: !state.vimeoInclude})        
      case 'SUBMIT_QUERY':
        return Object.assign({}, state, {query: action.value})
      case 'NEXT_PAGE_SET':
        return Object.assign({}, state, {youtubeNextPage: action.value})
      case 'PREV_PAGE_SET':
        return Object.assign({}, state, {youtubePreviousPage: action.value})
      case 'NEXT_PAGE':
        return Object.assign({}, state, {youtubeCurrentPage: state.youtubeNextPage})
      case 'PREVIOUS_PAGE':
        return Object.assign({}, state, {youtubeCurrentPage: state.youtubePreviousPage})
      default:
        return state;
    }

}

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk))) //if ever use thunk tweek this

export default store
