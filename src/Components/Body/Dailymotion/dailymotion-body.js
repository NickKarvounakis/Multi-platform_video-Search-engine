import React from 'react'
import { connect } from 'react-redux'
//JS File Imports
import DailymotionRow from './dailymotion-grid'


// Material UI File Imports
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
class DailymotionBody extends React.Component {

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
       this.performSearch(query,prevProps)
       }
     return null;
  }



// xdOykEJSXIg
  performSearch(query,props){
    const urlString = `https://api.dailymotion.com/videos?search=${query}&page=1`
    console.log(urlString)
    fetch(urlString)
      .then(function(response) {return response.json(); })
      .then(function(data){
        console.log(data)
        let videoRows = []
        data.list.forEach((video) => {
          console.log(video)
          const videoRow = <DailymotionRow video={video} />
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

export default connect(mapStateToProps,null)( DailymotionBody)
