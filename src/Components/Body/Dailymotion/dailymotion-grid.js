import React from 'react'

//JS File Imports
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

class DailymotionRow extends React.Component {



// "<iframe src="https://player.vimeo.com/video/197324296?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=150515" width="1920" height="1080" frameborder="0" title="Art is Theft" allow="autoplay; fullscreen" allowfullscreen></iframe>"

  render(){
    return(
        <Grid item  lg={3}   md={10}  >
        <Grid container direction="column" item xs={12} key={this.props.video.link}>
          <Grid item  >
            <iframe src={`https://www.dailymotion.com/embed/video/${this.props.video.id}`} width="400" height="400" title={this.props.video.title} allow="autoplay; fullscreen" allowFullScreen></iframe>
          </Grid>
          <Grid item  >
          <Typography variant="h6">{this.props.video.title}</Typography>
          </Grid>
          <Grid item  >
          <Typography variant="h6"><span style={{color:'crimson'}}>Channel name:</span>{this.props.video.title}</Typography>
          </Grid>
          <Grid item  >
          <a href={this.props.video.link} rel="noopener noreferrer" className="nostyle" target="_blank">
            <Grid container direction="row" justify="center" alignItems="center">
                                        <img src="vimeo.svg" width="50" height="50" className="spin" alt="dailymotion icon"></img>
                                        <Typography variant="h6" >Redirect</Typography>
            </Grid>
          </a>
          </Grid>
        </Grid >
        </Grid >
        )
  }
}

export default DailymotionRow
