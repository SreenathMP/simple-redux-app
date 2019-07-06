import React from "react";
import '../../css/chats.scss'


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
           </div>
           </div>


          <div class="col-md-8">
      <div class="settings-tray">
          <div class="friend-drawer no-gutters friend-drawer--grey">
            <h2>Messagebox</h2>
              <span class="settings-tray--right">
          </span>
        </div>
      </div>


      <div class="chat-panel">
        <div class="row no-gutters">
           <div class="col-md-8 ">
          <ul className="list-group py-2">
            <h3>Users</h3>
            {currentMembers.map((item) => (<li className="list-group-item list-group-item-action chat-bubble--left">{item}</li>))}
          </ul>
        </div>
      </div>

      <div class="row no-gutters">
          <div class="col-md-8 offset-md-9">
          <ul className="list-group py-2">
            <h3>Messages</h3>
            {currentMessages.map((im, index) => (<li className="list-group-item list-group-item-action chat-bubble--left" key={index}>{im.message}</li>))}
          </ul>
        </div>
      </div>
      <div class="row">
                <div class="col-12">
                  <div class="chat-box-tray">
                    <input type="text" placeholder="Type your message here..."></input>
                    <button class="btn btn-danger btn-space">Add Message</button>
                    <button class="btn btn-danger btn-space">Add User</button>

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

export default List
