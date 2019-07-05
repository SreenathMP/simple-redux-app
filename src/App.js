import React from 'react';
import './App.css';
import List from "./js/components/List";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {addAuthor} from './js/actions/index'
import {addMessage} from './js/actions/index'
import Chat from './js/components/chat'

class App extends React.Component {
  handleSubmit=()=>{
     this.props.addAuthor("User 3")
   }

   handleMessage=()=>{
     this.props.addMessage({message:"Hi",author:"User 1"})
    }

  render () {
   return (  <div>
        <div className="container-fluid ">
      <main>  <div><List/></div>
         <button className="btn btn-danger btn-space" onClick={this.handleSubmit}>Add User</button>
          <button className="btn btn-danger btn-space" onClick={this.handleMessage}>Add Message</button></main>
       </div>
       <main><Chat /></main>
    </div>)
  }
}


const mapStateToProps = (state) => {
  return {
    messages: state.messages.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addAuthor:(userName) => {
      dispatch(addAuthor(userName))
    },
    addMessage:(newMessage) => {
      dispatch(addMessage(newMessage))
    }
  }
}

 App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default App;
