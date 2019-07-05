import React from "react";


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
        <div class="row">
           <div class="col">
            <ul className="list-group py-2">
              <h1>Property</h1>
              {messages.map((el, i) => (<li className="list-group-item list-group-item-action" onClick={e => this.handleClick(i)}>{el.property_id}</li>))}
            </ul>
          </div>
          <div class="col">
            <ul className="list-group py-2">
              <h1>Users</h1>
              {currentMembers.map((item) => (<li className="list-group-item list-group-item-action">{item}</li>))}
            </ul>
            <ul className="list-group py-2">
              <h1>Messages</h1>
              {currentMessages.map((im, index) => (<li className="list-group-item list-group-item-action" key={index}>{im.message}</li>))}
            </ul>
          </div>

        </div>
      </div>

    </div>)
  }
}

export default List
