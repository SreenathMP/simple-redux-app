import React from 'react';
import './App.css';
import List from "./js/components/List";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {addAuthor} from './js/actions/index'

class App extends React.Component {
  handleSubmit=()=>{
    this.props.addAuthor("user3")
  }
  render () {
   return (  <div>
        <div className="container-fluid">
        <div><List/></div>
         <button className="btn btn-danger" onClick={this.handleSubmit}>Add User</button>
       </div>
    </div>)
  }
}


const mapStateToProps = (state) => {
  return {
    messages: state.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAuthor:(userName) => {
      dispatch(addAuthor(userName))
    }
  }
}

 App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default App;
