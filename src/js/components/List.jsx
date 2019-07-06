import React from "react";
import '../../css/chats.scss'
import { connect } from 'react-redux';
import {addAuthor} from '../actions/index'
import {addMessage} from '../actions/index'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  handleClick(index) {
    this.setState({index: index})
  }

  handleSubmit=()=>{
     this.props.addAuthor("User 3")
   }

   handleMessage=()=>{
     this.props.addMessage({group_index: 0, message:"Hi",author:"User 1"})
    }

  render() {
  const {messages} = this.props
  const mess = messages[this.state.index];
  const currentMessages = mess.message
  const currentMembers = mess.members
  return (<div>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-md-4 border-right">
                   <div class="search-box">
                  <div class="input-wrapper">
                    <i class="material-icons">search</i>
                    <input placeholder="Search here" type="text"></input>
                  </div>
                </div>
              <div class="text">
             {messages.map((el, i) => (<h6 className="friend-drawer friend-drawer--onhover" onClick={e => this.handleClick(i)}>Property ID:{el.property_id}</h6>))}
             <hr></hr>
           </div>
           </div>


          <div class="col-md-8">
      <div class="settings-tray">
          <div class="friend-drawer no-gutters friend-drawer--grey">
            <h2> </h2>
              <span class="settings-tray--right">
                <i>Message Box</i>

          </span>
        </div>
      </div>


      <div class="chat-panel">
        <div class="row no-gutters">
           <div class="col-md-8 ">
          <ul className="list-group py-2">
            <h3>Users</h3>
            {currentMembers.map((item) => (<div className="chat-bubble  chat-bubble--left">{item}</div>))}
          </ul>
        </div>
      </div>

      <div class="row no-gutters">
          <div class="col-md-8 offset-md-9">
          <ul className="list-group py-2">
            <h3>Messages</h3>
            {currentMessages.map((im, index) => (<div className="chat-bubble chat-bubble--right" key={index}>{im.author} : {im.message}</div>))}
          </ul>
        </div>
      </div>
      <div class="row">
                <div class="col-12">
                  <div class="chat-box-tray">
                    <input type="text" placeholder="Type your message here..."></input>
                    <button class="btn btn-primary btn-space" onClick={this.handleSubmit}>Add Message</button>
                    <button class="btn btn-primary btn-space" onClick={this.handleMessage}>Add User</button>

                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  </div>
</div>
 )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
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

List = connect(
mapStateToProps,
mapDispatchToProps
)(List)

export default List
