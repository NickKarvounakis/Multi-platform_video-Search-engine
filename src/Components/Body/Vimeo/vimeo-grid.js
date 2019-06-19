import React from 'react'

//JS File Imports
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

class VimeoRow extends React.Component {

  find_embeded_code(link){
    let string = ''
    for(let i =link.length-1;link[i] !== '/';i--)
        {
            string += link[i]
        }
    return string
  }

  reverse_embeded_code(string_reversed){
    let splitString = string_reversed.split("")
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join("")
    return joinArray
  }


  render(){
    let link = this.props.video.link
    const string_reversed = this.find_embeded_code(link)
    const embeded_code = this.reverse_embeded_code(string_reversed)

    return(
        <Grid item  lg={3}   md={10} >
        <Grid container direction="column" item xs={12} >
          <Grid item  >
            <iframe src={`https://player.vimeo.com/video/${embeded_code}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=150515`} width="400" height="400" frameborder="0" title={this.props.video.name} allow="autoplay; fullscreen" allowfullscreen></iframe>
          </Grid>
          <Grid item  >
          <Typography variant="h6">{this.props.video.name}</Typography>
          </Grid>
          <Grid item  >
          <Typography variant="h6">{this.props.video.user.name}</Typography>
          </Grid>
          <Grid item  >
          <a href={this.props.video.link}>video</a>
          </Grid>
        </Grid >
        </Grid >
        )
  }
}

export default VimeoRow
