import React from 'react'
import { connect } from 'react-redux'
//JS File Imports
import VimeoRow from './vimeo-grid'


// Material UI File Imports
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

class VimeoBody extends React.Component {

  constructor(){
    super()
    this.state = {}
    this.performSearch = this.performSearch.bind(this)
  }


   componentWillReceiveProps(prevProps, nextProps){
     console.log('DIFFERENT')
     if(prevProps.query !== '' )
       {
       const query = prevProps.query
       const API_KEY = 'a413b1fabcb502808642ab2fc7c35255'
       this.performSearch(API_KEY,query,prevProps)
       }
     return null;
  }



// xdOykEJSXIg
  performSearch(API,query,props){
    const urlString = `https://api.vimeo.com/videos?query=${query}&access_token=${API}`
    console.log(urlString)
    fetch(urlString)
      .then(function(response) {return response.json(); })
      .then(function(data){
        console.log(data)
        let videoRows = []
        data.data.forEach((video) => {
          console.log(video)
          const videoRow = <VimeoRow video={video} />
          videoRows.push(videoRow)
        })
                    this.setState({rows:videoRows})
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

export default connect(mapStateToProps,null)( VimeoBody)
