import React from 'react'


// Material UI Imports
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Introduction(){
    return(
      <Box>
        <Typography variant="h2" style={{color:"black"}}>Multi-platfrom Video Search Engine</Typography>
        <Typography paragraph>A website where you can search for the same video result on multiple websites,all at once with one click of a button</Typography>
      </Box>
    )
}
