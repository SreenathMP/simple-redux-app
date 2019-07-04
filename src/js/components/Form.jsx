import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addMessage } from "../actions/index";
function mapDispatchToProps(dispatch) {
  return {
    addMessage: message => dispatch(addMessage(message))
  };
}
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { message } = this.state;
    const id = uuidv1();
    this.props.addMessage({ message, id });
    this.setState({ message: "" });
  }
  render() {
    const { message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
           <input
            type="text"
            className="form-control"
            id="message"
            value={message}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Send Message
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
