import React, { Component } from "react";
import axios from "axios";

/* TODO 
  redo inconsistent code between components
  ie. this.state / useState
*/

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      messageSentStatus: "false",
      messageStatusText: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //async handleSubmit(e) {
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      messageSentStatus: "sending",
      messageStatusText: "Sending...",
    });
    const { name, email, message } = this.state;

    const form = axios
      .post("/api/form", {
        name,
        email,
        message,
      })
      .then((res) => {
        const response = res.data;
        this.setState({
          messageStatusText: response,
          messageSentStatus: "true",
        });
      });
  }

  render() {
    return (
      <div className="content">
        {this.state.messageSentStatus === "false" ? (
          <div>
            <h1>Contact</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <br />
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <label>
                Email:
                <br />
                <input type="email" name="email" onChange={this.handleChange} />
              </label>
              <label>
                Message:
                <br />
                <textarea
                  type="text"
                  name="message"
                  onChange={this.handleChange}
                />
              </label>
              <input className="submit-btn" type="submit" value="Send" />
            </form>
          </div>
        ) : this.state.messageSentStatus === "sending" ? (
          <h1>
            {/* Message sent */}
            {this.state.messageStatusText}
          </h1>
        ) : (
          <h1>
            {/* Message sent */}
            {this.state.messageStatusText}
          </h1>
        )}
      </div>
    );
  }
}
export default Contact;
