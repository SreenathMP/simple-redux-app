import React from "react";
import { connect } from "react-redux";

const List = ({ messages ,members}) => {
  return (
    <div>
    <ul className="list-group py-2">
    <h3>available members:</h3>
    {members.map(el => (
         <li className="list-group-item list-group-item-action">{el}</li>
    ))
    }
  </ul>
  <h3>messages:</h3>
  <ul className="list-group  py-2">
    {messages.map(message => (
         <li className="list-group-item list-group-item-action">message:{message.message} by {message.author}</li>
    ))
    }
  </ul>
  </div>
  )
}
const mapStateToProps = (state) => {
  return {
    members: state.messages.members,
    messages:state.messages.message
  }
}

export default connect(mapStateToProps)(List)
