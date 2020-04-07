import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      messageSent: "false",
      messageStatus: "",
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
      messageSent: "sending",
      messageStatus: "Sending...",
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
          messageStatus: response,
          messageSent: "true",
        });
      });
  }

  render() {
    return (
      <div className="content">
        {this.state.messageSent === "false" ? (
          <div>
            <h2>Contact</h2>
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
        ) : this.state.messageSent === "sending" ? (
          <h2>
            {/* Message sent */}
            {this.state.messageStatus}
          </h2>
        ) : (
          <h2>
            {/* Message sent */}
            {this.state.messageStatus}
          </h2>
        )}
      </div>
    );
  }
}
export default Contact;
