import React,{ Component } from 'react'
import { connect } from 'react-redux'



//MATERIAL UI Imports
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

 class Search_bar extends Component{

   constructor(){
     super()
     this.state = {
       input:''
     }
     this.inputChange = this.inputChange.bind(this)
     this.inputSubmit = this.inputSubmit.bind(this)
   }

   render(){
    return(
      <div className="search-background search__container" id="section1">
          <div>
            <form onSubmit={(event) => this.inputSubmit(event)}>
              <input className="searchBar search__input" placeholder="Search for a video!" value={this.state.input}  onChange={(e) => this.inputChange(e)} />
            </form>
            <Typography>{this.props.query}</Typography>
          </div>
      </div>
    )}

    inputChange(event){
        this.setState({
          input:event.target.value
        })
      }

    inputSubmit(event){
      event.preventDefault()
      this.props.submit_query(this.state.input)
      this.setState({
        input:''
      })
    }
}



const mapStateToProps = (state) => {
  return{
    query:state.query
  }
}


const mapDispatchToProps = (dispatch) => {
    return{
      submit_query:(query) => {
        dispatch({type:'SUBMIT_QUERY',value:query})
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search_bar)
