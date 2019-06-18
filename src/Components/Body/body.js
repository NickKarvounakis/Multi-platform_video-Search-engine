import React, { Component } from 'react'
import { connect } from 'react-redux'

// Material UI Imports
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

// JS File Imports
import VideoRow from './bodyRow'

 class Results_body extends Component{

   constructor(){
     super()
     this.state = {prevPageToken:'AAAAAA'}
     this.performSearch = this.performSearch.bind(this)
   }


    componentWillReceiveProps(prevProps, nextProps){
      if(prevProps.query !== '')
        {
        const query = prevProps.query
        const API_KEY = 'AIzaSyAOq-W4fK8TF_H9eotd5LALr_BP5EB7ArU'
        const pageToken = prevProps.youtubeCurrentPage
        this.performSearch(API_KEY,query,pageToken,prevProps)
        }
      return null;
   }



// xdOykEJSXIg
   performSearch(searchTerm,query,pageToken,props){
     const urlString = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&pageToken=${pageToken}&q=${query}&key=${searchTerm}`
     console.log(urlString)
     fetch(urlString)
       .then(function(response) {return response.json(); })
       .then(function(data){
            if(data.prevPageToken)
              {
              console.log('----------------->',data.prevPageToken)
              props.prev_page_set(data.prevPageToken)

              }
            let videoRows = []
            data.items.forEach((video) => {
            const videoRow = <VideoRow  key={video.snippet.title} video={video}/>
            videoRows.push(videoRow)
          })
            this.setState({rows:videoRows,nextPageToken:data.nextPageToken})
            props.next_page_set(data.nextPageToken)
       }.bind(this))

   }


  render(){
    return(
      <Box>
          <Grid container spacing={1}    lg={12}>
            {this.state.rows}
          </Grid>
      </Box>
    )}

}

const mapStateToProps = (state) => {
  return{
    query:state.query,
    youtubeCurrentPage:state.youtubeCurrentPage
  }
}


const mapDispatchToProps = (dispatch) => {
    return{
      next_page_set:(page) => {
        dispatch({type:'NEXT_PAGE_SET',value:page})
    },
      prev_page_set:(page) => {
        dispatch({type:'PREV_PAGE_SET',value:page})
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)( Results_body)
