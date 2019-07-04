import React from "react";
import { connect } from "react-redux";

const List = ({ messages }) => {
  return (
    <ul className="list-group list-group-flush">
    {messages.map(el => (
     el.message.map(item => (
       Object.keys(item).map((i,index) => (
         <p>{item[i]}</p>
       ))
     ))
    ))}
  </ul>
  )
}

export default List
