import React from 'react'
import { connect } from 'react-redux'

//Material UI Imports
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';


function Search_bar_settings(props){
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    if(name === 'checkedB')
      props.youtube_trigger()
  };

    return(
      <div className="search-background search__container" id="section1">
      <FormGroup row >
      <Box style={{margin:'auto'}}>
      <FormControlLabel
        control={ <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />  }
        label="Vimeo"
      />
      <FormControlLabel
        control={ <Checkbox  checked={state.checkedB}   onChange={handleChange('checkedB')}  value="checkedB"  color="primary"   /> }
        label="Youtube"
      />
      <FormControlLabel
        control={ <Checkbox  checked={state.checkedF}   onChange={handleChange('checkedF')}  value="checkedF"  color="primary"   /> }
        label="Dailymotion"
      />
      </Box>
          </FormGroup>
      </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return{
      youtube_trigger:() => {
        dispatch({type:'YOUTUBE_TRIGGER'})
    }
  }
}

export default connect(null,mapDispatchToProps)(Search_bar_settings)
