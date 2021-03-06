import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'

import ResultsBody from './youtube/youtube-body'
import VimeoBody from './Vimeo/vimeo-body'
import DailymotionBody from './Dailymotion/dailymotion-body.js'

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

 function CustomizedExpansionPanels(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
          <Grid container direction="row" justify="center" alignItems="center"><img src="./vimeo.svg" alt="youtube" height="50" width="50"/><Typography variant="h6">Vimeo</Typography></Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <VimeoBody />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
          <Grid container direction="row" justify="center" alignItems="center"><img src="./youtubecv.png" alt="youtube" height="30" /><Typography variant="h6" style={{marginLeft:'0.2em'}}>Youtube</Typography></Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container direction="column">
            <ResultsBody />
            <Typography variant="h6">Pages</Typography>
            <Grid container direction="row">
              <Grid item>
                <button onClick={() => {props.turn_page2()}}>PREV</button>
                <button onClick={() => {props.turn_page()}}>NEXT</button>
              </Grid>
            </Grid >
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
          <Grid container direction="row" justify="center" alignItems="center"><img src="./dailymotion.svg" alt="youtube" height="30" /></Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <DailymotionBody />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}






const mapDispatchToProps = (dispatch) => {
    return{
      turn_page:() => {
        dispatch({type:'NEXT_PAGE'})
    },turn_page2:() => {
      dispatch({type:'PREVIOUS_PAGE'})
  },
  }
}

export default connect(null,mapDispatchToProps)(CustomizedExpansionPanels)
