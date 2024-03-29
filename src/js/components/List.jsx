import React from "react";
import "../../css/chats.scss";
import FormDialog from "./FormDialog";
import { connect } from "react-redux";
import { addAuthor } from "../actions/index";
import { addMessage } from "../actions/index";
import { addGroup } from "../actions/index";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.messages[0].property_id,
      message: "",
      isOpen: false,
      title: "",
      user: ""
    };
  }

  chatbutton = {
    background: "blue"
  };

  handleClick(index) {
    this.setState({ index: index });
    this.setState({
      user: ""
    });
  }

  handleMessage = () => {
    if (this.state.user !== "") {
      this.props.addMessage({
        id: this.state.index,
        newmessage: this.state.message,
        author: this.state.user
      });
    }
  };

  handleUser = () => {
    this.setState({
      isOpen: true,
      title: "Add people"
    });
  };

  handleGroup = () => {
    this.setState({
      isOpen: true,
      title: "Add Group"
    });
  };

  formsave = value => {
    if (this.state.title === "Add people") {
      this.props.addAuthor(value, this.state.index);
    } else {
      this.props.addGroup(value);
    }

    this.setState({
      isOpen: false
    });
  };

  formClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  userChat = item => {
    this.setState({
      user: item
    });
  };

  render() {
    const { messages } = this.props;

    const mess = messages.find(el => el.property_id === this.state.index);
    const currentMessages = mess.message;
    const currentMembers = mess.members;

    return (
      <div>
        {this.state.isOpen ? (
          <FormDialog
            title={this.state.title}
            handleClose={this.formClose}
            handlesave={this.formsave}
          />
        ) : (
          ""
        )}

        <div class="container">
          <div class="row no-gutters">
            <div class="col-md-4 border-right">
              <button
                class="btn btn-primary "
                onClick={this.handleGroup.bind(this)}
              >
                <GroupAddIcon />
                Create Group
              </button>

              <div class="search-box">
                <div class="input-wrapper">
                  <i class="material-icons">search</i>
                  <input placeholder="Search here" type="text" />
                </div>
              </div>
              <div class="text">
                {messages != null
                  ? messages.map((el, i) =>
                      this.state.index === el.property_id ? (
                        <h6
                          key={i}
                          className="friend-drawer friend-drawer--onhover"
                          style={{ background: "#00C6FF" }}
                          onClick={e => this.handleClick(el.property_id)}
                        >
                          {el.property_id}
                        </h6>
                      ) : (
                        <h6
                          key={i}
                          className="friend-drawer friend-drawer--onhover"
                          onClick={e => this.handleClick(el.property_id)}
                        >
                          {el.property_id}
                        </h6>
                      )
                    )
                  : ""}

                <hr />
              </div>
            </div>

            <div class="col-md-8">
              <div class="settings-tray">
                <div class="friend-drawer no-gutters friend-drawer--grey">
                  <span class="settings-tray--right">
                    <i>{this.state.index}</i>
                    <i>
                      <GroupAddOutlinedIcon
                        fontSize="large"
                        onClick={this.handleUser.bind(this)}
                      />
                    </i>
                  </span>
                </div>
              </div>

              <div class="chat-panel">
                <div class="row no-gutters">
                  <div class="col-md-8 ">
                    <ul className="list-group py-2">
                      <h3>Users</h3>
                      {currentMembers != null
                        ? currentMembers.map((item, i) =>
                            this.state.user === item ? (
                              <div
                                key={i}
                                className="chat-bubble  chat-bubble--left"
                                style={{ background: "#00C6FF" }}
                                onClick={e => {
                                  this.userChat(item);
                                }}
                              >
                                {item}
                              </div>
                            ) : (
                              <div
                                key={i}
                                className="chat-bubble  chat-bubble--left"
                                onClick={e => {
                                  this.userChat(item);
                                }}
                              >
                                {item}
                              </div>
                            )
                          )
                        : ""}
                    </ul>
                  </div>
                </div>

                <div class="row no-gutters">
                  <div class="col-md-8 offset-md-9">
                    <ul className="list-group py-2">
                      <h3>Messages</h3>
                      {currentMessages != null
                        ? currentMessages.map((im, index) => (
                            <div
                              className="chat-bubble chat-bubble--right"
                              key={index}
                            >
                              {im.author}: {im.message}
                            </div>
                          ))
                        : ""}
                    </ul>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="chat-box-tray">
                      <input
                        type="text"
                        placeholder="Type your message here..."
                        onChange={this.handleChange}
                      />

                      <button
                        class="btn btn-primary btn-space"
                        onClick={this.handleMessage}
                      >
                        Add Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addAuthor: (userName, id) => {
      dispatch(addAuthor(userName, id));
    },
    addMessage: newMessage => {
      dispatch(addMessage(newMessage));
    },

    addGroup: newGroup => {
      dispatch(addGroup(newGroup));
    }
  };
};

List = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default List;
