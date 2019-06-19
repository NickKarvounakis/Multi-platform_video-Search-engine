import React from 'react'

//JS File Imports
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

class VimeoRow extends React.Component {


   isNumber(n) //checks if a  varialbe is a number
   { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }


  find_embeded_code(link){
    console.log('CODE',link)
    let string = ''
    for(let i =0;link[i] !== '?';i++)
        {
            if(this.isNumber(link[i]))
              string += link[i]
        }
    return string
  }

// "<iframe src="https://player.vimeo.com/video/197324296?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=150515" width="1920" height="1080" frameborder="0" title="Art is Theft" allow="autoplay; fullscreen" allowfullscreen></iframe>"

  render(){
    let link = this.props.video.embed.html
    const video_code = this.find_embeded_code(link)

    return(
        <Grid item  lg={3}   md={10} >
        <Grid container direction="column" item xs={12} >
          <Grid item  >
            <iframe src={`https://player.vimeo.com/video/${video_code}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=150515`} width="400" height="400" frameBorder="0" title={this.props.video.name} allow="autoplay; fullscreen" allowFullScreen></iframe>
          </Grid>
          <Grid item  >
          <Typography variant="h6">{this.props.video.name}</Typography>
          </Grid>
          <Grid item  >
          <Typography variant="h6"><span style={{color:'crimson'}}>Channel name:</span>{this.props.video.user.name}</Typography>
          </Grid>
          <Grid item  >
          <a href={this.props.video.link} className="nostyle" target="_blank">
            <Grid container direction="row" justify="center" alignItems="center">
                                        <img src="vimeo.svg" width="50" height="50" className="spin"></img>
                                        <Typography variant="h6" >Redirect</Typography>
            </Grid>
          </a>
          </Grid>
        </Grid >
        </Grid >
        )
  }
}

export default VimeoRow
