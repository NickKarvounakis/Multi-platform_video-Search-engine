import React from 'react'


//Material UI Imports
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';


export default function Search_bar_settings(){
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
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
        control={ <Checkbox  checked={state.checkedB}   onChange={handleChange('checkedB')}  value="checkedB"  color="primary"   /> }
        label="Dailymotion"
      />
      </Box>
          </FormGroup>
      </div>
    )
}
