import React from 'react'

//JS File Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class VideoRow extends React.Component {


    render(){
      const link = this.props.video.id.videoId
      console.log(link)
      return(
          <Grid item  lg={3}   md={10} >
          <Grid container direction="column" item xs={12} >
            <Grid item  >
            <iframe title={this.props.video.snippet.title}  src={`https://www.youtube.com/embed/${link}`} ></iframe>
            </Grid>
            <Grid item  >
            <Typography variant="h6">{this.props.video.snippet.title}</Typography>
            </Grid>
            <Grid item  >
            <Typography variant="h6">{this.props.video.snippet.channelTitle}</Typography>
            </Grid>
            <Grid item  >
            <a href={`https://www.youtube.com/watch?v=${link}`}>video</a>
            </Grid>
          </Grid >
          </Grid >
          )




    }
}

export default VideoRow
